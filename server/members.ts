import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

export type Member = {
  id: string
  name: string
  email: string
  phone: string
  university: string
  plantel: string
  career: string
  semester: string
  createdAt: string
  emailSent: boolean
  whatsappSent: boolean
}

const dataDir = process.env.VERCEL
  ? path.join("/tmp", "guugul-data")
  : path.resolve(process.cwd(), "data")
const membersFile = path.join(dataDir, "members.json")

let writeQueue: Promise<void> = Promise.resolve()

async function readMembers(): Promise<Member[]> {
  try {
    const raw = await readFile(membersFile, "utf8")
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Member[]) : []
  } catch {
    return []
  }
}

async function writeMembers(members: Member[]) {
  await mkdir(dataDir, { recursive: true })
  await writeFile(membersFile, `${JSON.stringify(members, null, 2)}\n`, "utf8")
}

export function enqueueSave(task: (members: Member[]) => Member[] | Promise<Member[]>) {
  const run = writeQueue.then(async () => {
    const current = await readMembers()
    const next = await task(current)
    await writeMembers(next)
  })
  writeQueue = run.then(
    () => undefined,
    () => undefined,
  )
  return run
}

export async function upsertMember(input: Omit<Member, "id" | "createdAt"> & { createdAt?: string }) {
  let saved: Member | undefined

  await enqueueSave((members) => {
    const email = input.email.toLowerCase()
    const existing = members.find((member) => member.email === email)

    if (existing) {
      saved = {
        ...existing,
        name: input.name,
        phone: input.phone,
        university: input.university,
        plantel: input.plantel,
        career: input.career,
        semester: input.semester,
        emailSent: input.emailSent,
        whatsappSent: input.whatsappSent,
      }
      return members.map((member) => (member.id === existing.id ? saved! : member))
    }

    saved = {
      id: crypto.randomUUID(),
      name: input.name,
      email,
      phone: input.phone,
      university: input.university,
      plantel: input.plantel,
      career: input.career,
      semester: input.semester,
      createdAt: new Date().toISOString(),
      emailSent: input.emailSent,
      whatsappSent: input.whatsappSent,
    }
    return [...members, saved]
  })

  if (!saved) {
    throw new Error("No se pudo guardar el registro")
  }

  return saved
}

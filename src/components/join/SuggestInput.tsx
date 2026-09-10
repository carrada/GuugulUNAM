import { Input } from "@/components/ui/input"

export const fieldClass =
  "h-11 rounded-xl border-black/10 bg-white px-3 text-base md:text-sm"

type SuggestInputProps = {
  id: string
  name: string
  value: string
  placeholder: string
  options: readonly string[]
  autoComplete?: string
  required?: boolean
  onChange: (value: string) => void
}

export function SuggestInput({
  id,
  name,
  value,
  placeholder,
  options,
  autoComplete = "off",
  required,
  onChange,
}: SuggestInputProps) {
  const listId = `${id}-options`

  return (
    <>
      <Input
        id={id}
        name={name}
        list={listId}
        value={value}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClass}
      />
      <datalist id={listId}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </>
  )
}

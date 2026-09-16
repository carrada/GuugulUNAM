import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ScrollManager } from "@/components/layout/ScrollManager"
import { Seo } from "@/components/seo/Seo"
import HomePage from "@/pages/HomePage"
import AvisoLegalPage from "@/pages/AvisoLegalPage"
import EventosPage from "@/pages/EventosPage"
import JoinPage from "@/pages/JoinPage"
import FaqPage from "@/pages/FaqPage"
import LearnPage from "@/pages/LearnPage"
import LearnTrackPage from "@/pages/LearnTrackPage"
import PromptsPage from "@/pages/PromptsPage"
import RoadmapPage from "@/pages/RoadmapPage"
import RoadmapsPage from "@/pages/RoadmapsPage"
import TerminosPage from "@/pages/TerminosPage"

export default function App() {
  return (
    <BrowserRouter>
      <Seo />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unete" element={<JoinPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/aprender" element={<LearnPage />} />
        <Route path="/aprender/prompts" element={<PromptsPage />} />
        <Route path="/aprender/roadmaps" element={<RoadmapsPage />} />
        <Route path="/aprender/roadmaps/:slug" element={<RoadmapPage />} />
        <Route path="/aprender/:slug" element={<LearnTrackPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        <Route path="/terminos-y-condiciones" element={<TerminosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

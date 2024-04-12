import Thedile from "/public/The-Dilettante.jpg";
export default function Td() {
  return (
    <div>
      <section className="ml-10 mr-10">
        <h2 className="text-2xl font-semibold py-6 text-blue-800">The dilettante</h2>
        <img src={Thedile} alt="" />
        <p className="pb-11 pt-6 w-96">Fique até ficar bêbada comigo. Um dia, a principal agente contra o terrorismo, Hana Lee, recebe a notícia da morte de seu irmão gêmeo. Incapaz de aceitar a morte de seu único parente vivo, ela decide descobrir a verdade. Ao longo do caminho, ela se envolve com o misterioso Eunseong Yoo e o chefe da máfia de sangue frio, Giulio Parenti.</p>
        <a className="bg-blue-300 px-6 py-2.5 rounded" href="https://flowermanga.com/manga/the-dilettante/">Ler</a>
      </section>
    </div>
  )
}

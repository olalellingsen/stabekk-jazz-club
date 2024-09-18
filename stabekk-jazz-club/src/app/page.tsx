export default function Home() {
  return (
    <div>
      <h1 className="text-center">Velkommen til Stabekk Jazz Club</h1>
      <img src="" alt="" />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <a href="/events">
          <button className="btn1">Se kommende konserter</button>
        </a>
        <a href="https://secure.officevisual.net/su/35481099518017">
          <button className="btn2">Motta vårt nyhetsbrev</button>
        </a>
      </div>
    </div>
  );
}

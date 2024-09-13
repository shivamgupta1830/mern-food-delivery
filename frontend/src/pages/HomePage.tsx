import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600 mb-3">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="#" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-black text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download MernEats App for faster ordering & personalized
            recommendations
          </span>
          <img src={appDownloadImage} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

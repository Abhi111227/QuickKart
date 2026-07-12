function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold">
          QuickKart
        </h2>

        <p className="mt-3 text-green-100">
          Fresh groceries delivered to your doorstep.
        </p>

        <div className="mt-8 border-t border-green-500 pt-6 flex flex-col md:flex-row justify-between">

          <p>
            © 2026 QuickKart. All Rights Reserved.
          </p>

          <p>
            Made with ❤️ using React + Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
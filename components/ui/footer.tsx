import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="col-span-12 flex justify-center items-center">
            <div className="mb-4 sm:mb-0">
              <div className="text-sm text-slate-300 text-center">© Primeinnovations.ca <span className="text-slate-500">-</span> All rights reserved.</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

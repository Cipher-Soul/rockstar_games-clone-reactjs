export default function Footer() {
  return (
    <>
    <footer className="bg-black p-[70px] capitalize">

      <div className="flex justify-between">
        <div className="max-sm:flex-col sm:flex gap-4 text-xl">
        {['contect','careers','community guidelines','subscribe'].map(element=>{
          return <a href="#" className="hover:text-[var(--rockstar-gold)]"><li className="list-none">{element}</li></a>
        })}
        </div>
        <div>
          <select className="bg-black text-white">
            <option selected>Select Lang</option>
            <option>Hindi </option>
            <option>English</option>
            <option>Kannada</option>
          </select>

        </div>
      </div>

      <div className="pt-[70px]">
        <div>
          {['corparate','privacy','cookie settings','cookie policy','legal','Do not sell or share my personal information'].map(ele=>{
            return <a href="#" className="hover:text-[var(--rockstar-gold)] py-4"><li className="list-none">{ele}</li></a> 
          })}
        </div>
        <div>
          <div className="social-links">
            {/* Social links */}
          </div>

        </div>
      </div>

      <div className="max-sm:flex-col sm:flex pt-20 justify-between">
        <div>Rockstar Games</div>
        <div className="flex gap-4">
          {['newyork','London','Peris','Bogot'].map((ele)=>{
            return (
              <div>
                {ele}
                </div>
            )
          })}
        </div>
        <div>
        MCMXCVIII
        </div>
      </div>

    </footer>
    </>
  )
}

import Contactmeform from "@/components/Contact/Contactmeform"
import Social from "@/components/Contact/Social"

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-rows-5 gap-2 items-center">
      <Contactmeform className="row-span-4"/>
      <Social/>
    </div>
    </div>
  )
}

export default Contact
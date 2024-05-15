
interface HeaderDialogProps {
  mobileMenuOpen: boolean,
  setMobileMenuOpen: (isOpen: boolean) => void
}

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import DialogCountries from "./DialogCountries";

export default function HeaderDialog({ mobileMenuOpen, setMobileMenuOpen }: HeaderDialogProps) {


  return (
    <div className="lg:hidden">



      <Dialog
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-transparent outline-none border-none hover:bg-transparent">  <SWMIcon name="MenuHamburger" set="broken" color="white" /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md  border-none rounded-lg">
          <DialogHeader>
            <DialogTitle className="font-semibold text-lg  sm:text-center"> More</DialogTitle>
            <DialogDescription >

            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2 overflow-y-auto">
              <DialogCountries />

            </div>

          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>



    </div>
  )
}


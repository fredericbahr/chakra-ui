import { Button } from "compositions/ui/button"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "compositions/ui/dialog"

export const DialogWithRole = () => {
  return (
    <DialogRoot role="alertdialog">
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our systems.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button colorPalette="red">Delete</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
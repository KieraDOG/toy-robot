import { useState } from "react";
import Button from "../Button";
import Dialog from "./_components/Dialog";

const Place = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)}>Place</Button>
      {isDialogOpen && <Dialog onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
};

export default Place;

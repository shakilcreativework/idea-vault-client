"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

export function DeleteAlert({ideaInfo}) {
  const router = useRouter();

  // ==========================================
    // Destructure Idea Data
    // ==========================================
    const {
        _id,
        ideaTitle,
    } = ideaInfo;

  const handleDelete = async() => {
    const res = await fetch(`http://localhost:5000/add-ideas/${_id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });

    const data = await res.json();
    // console.log(data);

    if(data.deletedCount){
      toast.success(`${ideaTitle} succesfully delete!`)

      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button className={"bg-[#FFE2E2] text-[#082047] flex justify-center items-center"} ><AiOutlineDelete className="text-red-500 text-lg" /> Delete Idea</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Idea permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{ideaTitle}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" className={"bg-[#FFE2E2] text-[#082047] flex justify-center items-center"} ><AiOutlineDelete className="text-red-500 text-lg" /> Delete Idea</Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
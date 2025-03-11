import {useDeleteItem, useFetchItems} from "@/hooks";
import {useState} from "react";
import {Item} from "@/types";
import {useMutation} from "@tanstack/react-query";
import {postItem} from "@/api/InventoryApiService.ts";
import {FORM_FIELDS_ITEM} from "@/constants.ts";

const useSaveItem = (
    setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
    id: string
) => {

    return useMutation({
        mutationFn: postItem,
        onSuccess: (item) => {
            setItems((prev: Item[]) => prev.map((listItem) => listItem.id === id ? listItem = item : listItem));
        },
        onError: (error) => {
            console.error("Error deleting item:", error);
        },
    });
};

export const useItemEditorData = (id: string) => {
    const {items, setItems} = useFetchItems();
    const item = items.find((item) => item.id === id);
    const {mutate: deleteMutation} = useDeleteItem(setItems, id);
    const {mutate: saveMutation} = useSaveItem(setItems, id);
    const [edit, setEdit] = useState(false);

    const onSave = <T extends Item>(e: React.FormEvent<HTMLFormElement>) => {
        console.log("onSave");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newItem = Object.fromEntries(
            FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
        ) as T;
        saveMutation(newItem)
        setEdit(false);
    };

    const onDelete = () => {
        if (item) {
            deleteMutation(item.id);
        }
    };

    return {item, onDelete, edit, setEdit, onSave};
};

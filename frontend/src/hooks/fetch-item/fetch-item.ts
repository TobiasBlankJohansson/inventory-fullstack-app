import { getItems } from "@/api/InventoryApiService";
import { Item } from "@/types";
import { useEffect, useState } from "react";

export const useFetchItems = () => {
    const [items, setItems] = useState<Item[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getItems();
          setItems(data);
        } catch (error) {
          console.error("Failed to fetch items:", error);
        }
      };
      fetchData();
    }, []);
  
    return { items, setItems };
  };
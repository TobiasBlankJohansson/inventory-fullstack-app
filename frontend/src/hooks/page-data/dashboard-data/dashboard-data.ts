import {
  useFilterItems,
  useGetItems,
  useGetResponsible,
  useGetStorage,
  useOrderItem,
} from "@/hooks";
import { consolidateInventory } from "@/util";
import { Item } from "@/types";

export function useDashboardData() {
  const { items, setItems } = useGetItems();
  const { storage } = useGetStorage();
  const { responsible } = useGetResponsible();
  const { itemList, setSearch, setSelectedResponsible, setSelectedStorage } =
    useFilterItems(consolidateInventory(items));
  const { setOrder, order, orderItems } = useOrderItem();

  return {
    responsible: [
      ...responsible,
      {
        id: "0",
        name: "Total",
      },
    ],
    items,
    setItems,
    setSearch,
    setSelectedStorage,
    setSelectedResponsible,
    itemList: orderItems(itemList, order) as Item[],
    storage,
    setOrder,
    order,
  };
}

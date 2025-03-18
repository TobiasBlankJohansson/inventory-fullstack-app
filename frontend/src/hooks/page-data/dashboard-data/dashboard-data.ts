import {useFilterItems, useGetItems, useGetResponsible, useGetStorage} from "@/hooks";
import {consolidateInventory} from "@/util";

export function useDashboardData() {
  const {items, setItems} = useGetItems();
  const {storageArea} = useGetStorage();
  const {responsible} = useGetResponsible();
  const {itemList, setSearch, setSelectedResponsible, setSelectedStorage} =
    useFilterItems(consolidateInventory(items));

  return {
    responsible: [...responsible, {
      id: "0",
      name: "Total"
    }],
    items,
    setItems,
    setSearch,
    setSelectedStorage,
    setSelectedResponsible,
    itemList,
    storageArea,
  };
}

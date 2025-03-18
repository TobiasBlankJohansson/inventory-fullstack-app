import {useFilterItems, useGetItems, useGetStorage} from "@/hooks";
import {useFetchResponsible} from "@/hooks/fetch";
import {consolidateInventory} from "@/util";

export function useDashboardData() {
  const {items, setItems} = useGetItems();
  const {storageArea} = useGetStorage();
  const {responsible} = useFetchResponsible();
  const {itemList, setSearch, setSelectedResponsible, setSelectedStorage} =
    useFilterItems(consolidateInventory(items));
  const responsibleList = [...responsible, {
    id: "0",
    name: "Total"
  }];

  return {
    responsible: responsibleList,
    items,
    setItems,
    setSearch,
    setSelectedStorage,
    setSelectedResponsible,
    itemList,
    storageArea,
  };
}

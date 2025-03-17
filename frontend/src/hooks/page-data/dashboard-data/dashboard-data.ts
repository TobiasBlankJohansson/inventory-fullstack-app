import { useFilterItems } from "../../filter-items";
import { useFetchItems } from "../../fetch/fetch-items";
import { useFetchStorage } from "../../fetch/fetch-storage";
import { useFetchResponsible } from "@/hooks/fetch";
import { consolidateInventory } from "@/util";

export function useDashboardData() {
  const { items, setItems, isLoading, error, refetch } = useFetchItems();
  const { storageArea } = useFetchStorage();
  const { responsible } = useFetchResponsible();
  const { itemList, setSearch, setSelectedResponsible, setSelectedStorage } =
    useFilterItems(consolidateInventory(items));
  const responsibleList = [...responsible, "Total"];

  return {
    responsible: responsibleList,
    items,
    setItems,
    setSearch,
    setSelectedStorage,
    setSelectedResponsible,
    itemList,
    storageArea,
    isLoading,
    error,
    refetch,
  };
}

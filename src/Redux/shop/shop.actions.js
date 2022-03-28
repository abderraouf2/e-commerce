import shopActionType from "./shop.types";

export const updateCollections= (collectionsMap)=>({
  type: shopActionType.UpdateCollections,
  payload: collectionsMap
})
import {ApiType, StoreConfig, StoreType } from "@taomish-ui-v2/common-ui";

const storeConfigs: Map<string,StoreConfig> = new Map();

storeConfigs.set('globalIndicatorDetails',{
  name: "globalIndicatorDetails",
  path: "/api-bm/api/globalindicatordetails/v1/getallglobalindicatordetails",
  refreshOnInitUpdate: false,
  loadOnInit: true,
  optionKey: 'name',
  optionLabel: 'name',
  storeType: StoreType.api,
  idField: "uuid"
})

storeConfigs.set('company',{
  name: "company",
  path:  "/api-bm/api/company/v1/getcompanybycriteria",
  refreshOnInitUpdate: false,
  loadOnInit: true,
  optionKey: 'uuid',
  payloadFunction: 'companyPayload',
  apiType: ApiType.POST,
  optionLabel: 'name',
  storeType: StoreType.api,
  idField: "uuid"
})

export default storeConfigs;

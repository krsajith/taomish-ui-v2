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
storeConfigs.set('currency',{
  name: "currency",
  path: "./assets/application/data/currency.json",
  refreshOnInitUpdate: false,
  loadOnInit: true,
  optionKey: 'value',
  optionLabel: 'label',
  storeType: StoreType.json,
  idField: "uuid",
})

storeConfigs.set('countries',{
  name: "countries",
  path: "/api-bm/api/location/v1/getallbylocationtype?",
  refreshOnInitUpdate: false,
  loadOnInit: true,
  optionKey: 'name',
  optionLabel: 'name',
  storeType: StoreType.api,
  idField: "uuid"
})

storeConfigs.set('accountDetails',{
  name: "accountDetails",
  path: "/api-bm/api/accountDetails",
  refreshOnInitUpdate: false,
  loadOnInit: true,
  optionKey: "accountNo",
  optionLabel: 'accountNo',
  storeType: StoreType.api,
  idField: "uuid"
})

export default storeConfigs;

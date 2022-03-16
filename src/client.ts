import axios, { AxiosInstance } from 'axios'

import { ClientConfig } from './core/ClientConfig'
import { AccountsService } from './services/AccountsService'
import { ActivityService } from './services/ActivityService'
import { AnalyticsService } from './services/AnalyticsService'
import { BundleSelectionsService } from './services/BundleSelectionsService'
import { EmissionEstimatesService } from './services/EmissionEstimatesService'
import { OffsetLinksService } from './services/OffsetLinksService'
import { OrdersService } from './services/OrdersService'
import { ProjectsService } from './services/ProjectsService'
import { WebhookRequestService } from './services/WebhookRequestService'
import { WebhooksService } from './services/WebhooksService'

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null),
            )
        })
    })
}
export class LuneClient {
    protected client: AxiosInstance
    protected config: ClientConfig

    constructor(apiKey: string) {
        this.config = {
            BASE_URL: 'http://localhost:3000/v{api-version}',
            VERSION: '1',
            BEARER_TOKEN: apiKey,
        }
        this.client = axios.create()
    }
}
applyMixins(LuneClient, [
    AccountsService,
    ActivityService,
    AnalyticsService,
    BundleSelectionsService,
    EmissionEstimatesService,
    OffsetLinksService,
    OrdersService,
    ProjectsService,
    WebhookRequestService,
    WebhooksService,
])
// eslint-disable-next-line no-redeclare -- mixins require same name
export interface LuneClient
    extends AccountsService,
        ActivityService,
        AnalyticsService,
        BundleSelectionsService,
        EmissionEstimatesService,
        OffsetLinksService,
        OrdersService,
        ProjectsService,
        WebhookRequestService,
        WebhooksService {}
export type { Account } from './models/Account'
export type { Activity } from './models/Activity'
export type { Address } from './models/Address'
export type { AirportCode } from './models/AirportCode'
export type { AirportSourceDestination } from './models/AirportSourceDestination'
export type { Analytics } from './models/Analytics'
export type { Area } from './models/Area'
export type { Bundle } from './models/Bundle'
export type { BundlePercentage } from './models/BundlePercentage'
export type { BundlePercentageRequest } from './models/BundlePercentageRequest'
export type { BundleSelection } from './models/BundleSelection'
export type { BundleSelectionRequest } from './models/BundleSelectionRequest'
export type { BundleSummary } from './models/BundleSummary'
export type { CabinClass } from './models/CabinClass'
export type { CloudProvider } from './models/CloudProvider'
export type { CompanyCloudUse } from './models/CompanyCloudUse'
export type { CompanyEmissionEstimate } from './models/CompanyEmissionEstimate'
export type { CompanyEstimateRequest } from './models/CompanyEstimateRequest'
export type { CompanyOnPremiseUse } from './models/CompanyOnPremiseUse'
export type { ContainerShippingMethod } from './models/ContainerShippingMethod'
export type { CreateOrderByQuantityRequest } from './models/CreateOrderByQuantityRequest'
export type { CreateOrderByValueRequest } from './models/CreateOrderByValueRequest'
export type { CreateWebhookRequest } from './models/CreateWebhookRequest'
export type { CurrencyCode } from './models/CurrencyCode'
export type { Diet } from './models/Diet'
export type { Distance } from './models/Distance'
export type { ElectricityConsumption } from './models/ElectricityConsumption'
export type { ElectricityEstimateRequest } from './models/ElectricityEstimateRequest'
export type { EmissionEstimate } from './models/EmissionEstimate'
export type { Error } from './models/Error'
export type { Errors } from './models/Errors'
export type { FlightEstimateRequest } from './models/FlightEstimateRequest'
export type { HugeOilTankerSeaShippingMethod } from './models/HugeOilTankerSeaShippingMethod'
export type { IATACode } from './models/IATACode'
export type { ICAOCode } from './models/ICAOCode'
export type { IdentifiedVesselShippingMethod } from './models/IdentifiedVesselShippingMethod'
export type { IntegerPercentage } from './models/IntegerPercentage'
export type { Mass } from './models/Mass'
export type { Merchant } from './models/Merchant'
export type { Metadata } from './models/Metadata'
export type { MonetaryAmount } from './models/MonetaryAmount'
export type { Money } from './models/Money'
export type { OffsetLink } from './models/OffsetLink'
export type { OffsetLinkAnalytics } from './models/OffsetLinkAnalytics'
export type { OffsetLinkOrder } from './models/OffsetLinkOrder'
export type { OffsetLinkRequest } from './models/OffsetLinkRequest'
export type { OffsetLinkStatus } from './models/OffsetLinkStatus'
export type { OffsetLinkUpdateRequest } from './models/OffsetLinkUpdateRequest'
export type { OffsetQuantitySeriesItem } from './models/OffsetQuantitySeriesItem'
export type { OffsetValueSeriesItem } from './models/OffsetValueSeriesItem'
export type { Order } from './models/Order'
export type { OrderBase } from './models/OrderBase'
export type { OrderBundle } from './models/OrderBundle'
export type { OrderByQuantity } from './models/OrderByQuantity'
export type { OrderByValue } from './models/OrderByValue'
export type { OrderProject } from './models/OrderProject'
export type { OrderQuoteBase } from './models/OrderQuoteBase'
export type { OrderQuoteByQuantity } from './models/OrderQuoteByQuantity'
export type { OrderQuoteByQuantityRequest } from './models/OrderQuoteByQuantityRequest'
export type { OrderQuoteByValue } from './models/OrderQuoteByValue'
export type { OrderQuoteByValueRequest } from './models/OrderQuoteByValueRequest'
export type { PaginatedActivity } from './models/PaginatedActivity'
export type { PaginatedBase } from './models/PaginatedBase'
export type { PaginatedBundles } from './models/PaginatedBundles'
export type { PaginatedOffsetLinks } from './models/PaginatedOffsetLinks'
export type { PaginatedOrders } from './models/PaginatedOrders'
export type { PaginatedProjects } from './models/PaginatedProjects'
export type { Project } from './models/Project'
export type { ProjectSummary } from './models/ProjectSummary'
export type { RoRoSeaShippingMethod } from './models/RoRoSeaShippingMethod'
export type { SeaShippingMethod } from './models/SeaShippingMethod'
export type { Shipment } from './models/Shipment'
export type { ShippingEstimateRequest } from './models/ShippingEstimateRequest'
export type { ShippingMethod } from './models/ShippingMethod'
export type { SimpleShippingMethod } from './models/SimpleShippingMethod'
export type { SourceDestination } from './models/SourceDestination'
export type { Timestamp } from './models/Timestamp'
export type { TransactionEstimateRequest } from './models/TransactionEstimateRequest'
export type { UpdateWebhookRequest } from './models/UpdateWebhookRequest'
export type { Url } from './models/Url'
export type { VariableFuelSeaShippingMethod } from './models/VariableFuelSeaShippingMethod'
export type { VariableFuelVariableLoadSeaShippingMethod } from './models/VariableFuelVariableLoadSeaShippingMethod'
export type { Webhook } from './models/Webhook'
export type { WebhookEvent } from './models/WebhookEvent'
export type { WebhookRequest } from './models/WebhookRequest'
export { $Account } from './schemas/$Account'
export { $Activity } from './schemas/$Activity'
export { $Address } from './schemas/$Address'
export { $AirportCode } from './schemas/$AirportCode'
export { $AirportSourceDestination } from './schemas/$AirportSourceDestination'
export { $Analytics } from './schemas/$Analytics'
export { $Area } from './schemas/$Area'
export { $Bundle } from './schemas/$Bundle'
export { $BundlePercentage } from './schemas/$BundlePercentage'
export { $BundlePercentageRequest } from './schemas/$BundlePercentageRequest'
export { $BundleSelection } from './schemas/$BundleSelection'
export { $BundleSelectionRequest } from './schemas/$BundleSelectionRequest'
export { $BundleSummary } from './schemas/$BundleSummary'
export { $CabinClass } from './schemas/$CabinClass'
export { $CloudProvider } from './schemas/$CloudProvider'
export { $CompanyCloudUse } from './schemas/$CompanyCloudUse'
export { $CompanyEmissionEstimate } from './schemas/$CompanyEmissionEstimate'
export { $CompanyEstimateRequest } from './schemas/$CompanyEstimateRequest'
export { $CompanyOnPremiseUse } from './schemas/$CompanyOnPremiseUse'
export { $ContainerShippingMethod } from './schemas/$ContainerShippingMethod'
export { $CreateOrderByQuantityRequest } from './schemas/$CreateOrderByQuantityRequest'
export { $CreateOrderByValueRequest } from './schemas/$CreateOrderByValueRequest'
export { $CreateWebhookRequest } from './schemas/$CreateWebhookRequest'
export { $CurrencyCode } from './schemas/$CurrencyCode'
export { $Diet } from './schemas/$Diet'
export { $Distance } from './schemas/$Distance'
export { $ElectricityConsumption } from './schemas/$ElectricityConsumption'
export { $ElectricityEstimateRequest } from './schemas/$ElectricityEstimateRequest'
export { $EmissionEstimate } from './schemas/$EmissionEstimate'
export { $Error } from './schemas/$Error'
export { $Errors } from './schemas/$Errors'
export { $FlightEstimateRequest } from './schemas/$FlightEstimateRequest'
export { $HugeOilTankerSeaShippingMethod } from './schemas/$HugeOilTankerSeaShippingMethod'
export { $IATACode } from './schemas/$IATACode'
export { $ICAOCode } from './schemas/$ICAOCode'
export { $IdentifiedVesselShippingMethod } from './schemas/$IdentifiedVesselShippingMethod'
export { $IntegerPercentage } from './schemas/$IntegerPercentage'
export { $Mass } from './schemas/$Mass'
export { $Merchant } from './schemas/$Merchant'
export { $Metadata } from './schemas/$Metadata'
export { $MonetaryAmount } from './schemas/$MonetaryAmount'
export { $Money } from './schemas/$Money'
export { $OffsetLink } from './schemas/$OffsetLink'
export { $OffsetLinkAnalytics } from './schemas/$OffsetLinkAnalytics'
export { $OffsetLinkOrder } from './schemas/$OffsetLinkOrder'
export { $OffsetLinkRequest } from './schemas/$OffsetLinkRequest'
export { $OffsetLinkStatus } from './schemas/$OffsetLinkStatus'
export { $OffsetLinkUpdateRequest } from './schemas/$OffsetLinkUpdateRequest'
export { $OffsetQuantitySeriesItem } from './schemas/$OffsetQuantitySeriesItem'
export { $OffsetValueSeriesItem } from './schemas/$OffsetValueSeriesItem'
export { $Order } from './schemas/$Order'
export { $OrderBase } from './schemas/$OrderBase'
export { $OrderBundle } from './schemas/$OrderBundle'
export { $OrderByQuantity } from './schemas/$OrderByQuantity'
export { $OrderByValue } from './schemas/$OrderByValue'
export { $OrderProject } from './schemas/$OrderProject'
export { $OrderQuoteBase } from './schemas/$OrderQuoteBase'
export { $OrderQuoteByQuantity } from './schemas/$OrderQuoteByQuantity'
export { $OrderQuoteByQuantityRequest } from './schemas/$OrderQuoteByQuantityRequest'
export { $OrderQuoteByValue } from './schemas/$OrderQuoteByValue'
export { $OrderQuoteByValueRequest } from './schemas/$OrderQuoteByValueRequest'
export { $PaginatedActivity } from './schemas/$PaginatedActivity'
export { $PaginatedBase } from './schemas/$PaginatedBase'
export { $PaginatedBundles } from './schemas/$PaginatedBundles'
export { $PaginatedOffsetLinks } from './schemas/$PaginatedOffsetLinks'
export { $PaginatedOrders } from './schemas/$PaginatedOrders'
export { $PaginatedProjects } from './schemas/$PaginatedProjects'
export { $Project } from './schemas/$Project'
export { $ProjectSummary } from './schemas/$ProjectSummary'
export { $RoRoSeaShippingMethod } from './schemas/$RoRoSeaShippingMethod'
export { $SeaShippingMethod } from './schemas/$SeaShippingMethod'
export { $Shipment } from './schemas/$Shipment'
export { $ShippingEstimateRequest } from './schemas/$ShippingEstimateRequest'
export { $ShippingMethod } from './schemas/$ShippingMethod'
export { $SimpleShippingMethod } from './schemas/$SimpleShippingMethod'
export { $SourceDestination } from './schemas/$SourceDestination'
export { $Timestamp } from './schemas/$Timestamp'
export { $TransactionEstimateRequest } from './schemas/$TransactionEstimateRequest'
export { $UpdateWebhookRequest } from './schemas/$UpdateWebhookRequest'
export { $Url } from './schemas/$Url'
export { $VariableFuelSeaShippingMethod } from './schemas/$VariableFuelSeaShippingMethod'
export { $VariableFuelVariableLoadSeaShippingMethod } from './schemas/$VariableFuelVariableLoadSeaShippingMethod'
export { $Webhook } from './schemas/$Webhook'
export { $WebhookEvent } from './schemas/$WebhookEvent'
export { $WebhookRequest } from './schemas/$WebhookRequest'
export { AccountsService } from './services/AccountsService'
export { ActivityService } from './services/ActivityService'
export { AnalyticsService } from './services/AnalyticsService'
export { BundleSelectionsService } from './services/BundleSelectionsService'
export { EmissionEstimatesService } from './services/EmissionEstimatesService'
export { OffsetLinksService } from './services/OffsetLinksService'
export { OrdersService } from './services/OrdersService'
export { ProjectsService } from './services/ProjectsService'
export { WebhookRequestService } from './services/WebhookRequestService'
export { WebhooksService } from './services/WebhooksService'

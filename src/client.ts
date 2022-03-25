import axios, { AxiosInstance } from 'axios'

import { ClientConfig } from './core/ClientConfig'
import { AccountsService } from './services/AccountsService.js'
import { ActivityService } from './services/ActivityService.js'
import { AnalyticsService } from './services/AnalyticsService.js'
import { BundleSelectionsService } from './services/BundleSelectionsService.js'
import { EmissionEstimatesService } from './services/EmissionEstimatesService.js'
import { OffsetLinksService } from './services/OffsetLinksService.js'
import { OrdersService } from './services/OrdersService.js'
import { ProjectsService } from './services/ProjectsService.js'
import { WebhookRequestService } from './services/WebhookRequestService.js'
import { WebhooksService } from './services/WebhooksService.js'

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

    constructor(apiKey: string, baseUrl: string = 'https://api.lune.co', apiVersion: string = '1') {
        this.config = {
            BASE_URL: `${baseUrl}/v{api-version}`,
            VERSION: apiVersion,
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
export type { Account } from './models/Account.js'
export type { Activity } from './models/Activity.js'
export type { Address } from './models/Address.js'
export type { AirportCode } from './models/AirportCode.js'
export type { AirportSourceDestination } from './models/AirportSourceDestination.js'
export type { Analytics } from './models/Analytics.js'
export type { Area } from './models/Area.js'
export type { Bundle } from './models/Bundle.js'
export type { BundlePercentage } from './models/BundlePercentage.js'
export type { BundlePercentageRequest } from './models/BundlePercentageRequest.js'
export type { BundleSelection } from './models/BundleSelection.js'
export type { BundleSelectionRequest } from './models/BundleSelectionRequest.js'
export type { BundleSummary } from './models/BundleSummary.js'
export type { CabinClass } from './models/CabinClass.js'
export type { CloudProvider } from './models/CloudProvider.js'
export type { CompanyCloudUse } from './models/CompanyCloudUse.js'
export type { CompanyEmissionEstimate } from './models/CompanyEmissionEstimate.js'
export type { CompanyEstimateRequest } from './models/CompanyEstimateRequest.js'
export type { CompanyOnPremiseUse } from './models/CompanyOnPremiseUse.js'
export type { ContainerShippingMethod } from './models/ContainerShippingMethod.js'
export type { CreateOrderByQuantityRequest } from './models/CreateOrderByQuantityRequest.js'
export type { CreateOrderByValueRequest } from './models/CreateOrderByValueRequest.js'
export type { CreateWebhookRequest } from './models/CreateWebhookRequest.js'
export type { CurrencyCode } from './models/CurrencyCode.js'
export type { Diet } from './models/Diet.js'
export type { Distance } from './models/Distance.js'
export type { ElectricityConsumption } from './models/ElectricityConsumption.js'
export type { ElectricityEstimateRequest } from './models/ElectricityEstimateRequest.js'
export type { EmissionEstimate } from './models/EmissionEstimate.js'
export type { Error } from './models/Error.js'
export type { Errors } from './models/Errors.js'
export type { FlightEstimateRequest } from './models/FlightEstimateRequest.js'
export type { HugeOilTankerSeaShippingMethod } from './models/HugeOilTankerSeaShippingMethod.js'
export type { IATACode } from './models/IATACode.js'
export type { ICAOCode } from './models/ICAOCode.js'
export type { IdentifiedVesselShippingMethod } from './models/IdentifiedVesselShippingMethod.js'
export type { IntegerPercentage } from './models/IntegerPercentage.js'
export type { Mass } from './models/Mass.js'
export type { Merchant } from './models/Merchant.js'
export type { Metadata } from './models/Metadata.js'
export type { MonetaryAmount } from './models/MonetaryAmount.js'
export type { Money } from './models/Money.js'
export type { OffsetLink } from './models/OffsetLink.js'
export type { OffsetLinkAnalytics } from './models/OffsetLinkAnalytics.js'
export type { OffsetLinkOrder } from './models/OffsetLinkOrder.js'
export type { OffsetLinkRequest } from './models/OffsetLinkRequest.js'
export type { OffsetLinkStatus } from './models/OffsetLinkStatus.js'
export type { OffsetLinkUpdateRequest } from './models/OffsetLinkUpdateRequest.js'
export type { OffsetQuantitySeriesItem } from './models/OffsetQuantitySeriesItem.js'
export type { OffsetValueSeriesItem } from './models/OffsetValueSeriesItem.js'
export type { Order } from './models/Order.js'
export type { OrderBase } from './models/OrderBase.js'
export type { OrderBundle } from './models/OrderBundle.js'
export type { OrderByQuantity } from './models/OrderByQuantity.js'
export type { OrderByValue } from './models/OrderByValue.js'
export type { OrderProject } from './models/OrderProject.js'
export type { OrderQuoteBase } from './models/OrderQuoteBase.js'
export type { OrderQuoteByQuantity } from './models/OrderQuoteByQuantity.js'
export type { OrderQuoteByQuantityRequest } from './models/OrderQuoteByQuantityRequest.js'
export type { OrderQuoteByValue } from './models/OrderQuoteByValue.js'
export type { OrderQuoteByValueRequest } from './models/OrderQuoteByValueRequest.js'
export type { PaginatedActivity } from './models/PaginatedActivity.js'
export type { PaginatedBase } from './models/PaginatedBase.js'
export type { PaginatedBundles } from './models/PaginatedBundles.js'
export type { PaginatedOffsetLinks } from './models/PaginatedOffsetLinks.js'
export type { PaginatedOrders } from './models/PaginatedOrders.js'
export type { PaginatedProjects } from './models/PaginatedProjects.js'
export type { Project } from './models/Project.js'
export type { ProjectSummary } from './models/ProjectSummary.js'
export type { RoRoSeaShippingMethod } from './models/RoRoSeaShippingMethod.js'
export type { SeaShippingMethod } from './models/SeaShippingMethod.js'
export type { Shipment } from './models/Shipment.js'
export type { ShippingEstimateRequest } from './models/ShippingEstimateRequest.js'
export type { ShippingMethod } from './models/ShippingMethod.js'
export type { SimpleShippingMethod } from './models/SimpleShippingMethod.js'
export type { SourceDestination } from './models/SourceDestination.js'
export type { Timestamp } from './models/Timestamp.js'
export type { TransactionEstimateRequest } from './models/TransactionEstimateRequest.js'
export type { UpdateWebhookRequest } from './models/UpdateWebhookRequest.js'
export type { Url } from './models/Url.js'
export type { VariableFuelSeaShippingMethod } from './models/VariableFuelSeaShippingMethod.js'
export type { VariableFuelVariableLoadSeaShippingMethod } from './models/VariableFuelVariableLoadSeaShippingMethod.js'
export type { Webhook } from './models/Webhook.js'
export type { WebhookEvent } from './models/WebhookEvent.js'
export type { WebhookRequest } from './models/WebhookRequest.js'
export { $Account } from './schemas/$Account.js'
export { $Activity } from './schemas/$Activity.js'
export { $Address } from './schemas/$Address.js'
export { $AirportCode } from './schemas/$AirportCode.js'
export { $AirportSourceDestination } from './schemas/$AirportSourceDestination.js'
export { $Analytics } from './schemas/$Analytics.js'
export { $Area } from './schemas/$Area.js'
export { $Bundle } from './schemas/$Bundle.js'
export { $BundlePercentage } from './schemas/$BundlePercentage.js'
export { $BundlePercentageRequest } from './schemas/$BundlePercentageRequest.js'
export { $BundleSelection } from './schemas/$BundleSelection.js'
export { $BundleSelectionRequest } from './schemas/$BundleSelectionRequest.js'
export { $BundleSummary } from './schemas/$BundleSummary.js'
export { $CabinClass } from './schemas/$CabinClass.js'
export { $CloudProvider } from './schemas/$CloudProvider.js'
export { $CompanyCloudUse } from './schemas/$CompanyCloudUse.js'
export { $CompanyEmissionEstimate } from './schemas/$CompanyEmissionEstimate.js'
export { $CompanyEstimateRequest } from './schemas/$CompanyEstimateRequest.js'
export { $CompanyOnPremiseUse } from './schemas/$CompanyOnPremiseUse.js'
export { $ContainerShippingMethod } from './schemas/$ContainerShippingMethod.js'
export { $CreateOrderByQuantityRequest } from './schemas/$CreateOrderByQuantityRequest.js'
export { $CreateOrderByValueRequest } from './schemas/$CreateOrderByValueRequest.js'
export { $CreateWebhookRequest } from './schemas/$CreateWebhookRequest.js'
export { $CurrencyCode } from './schemas/$CurrencyCode.js'
export { $Diet } from './schemas/$Diet.js'
export { $Distance } from './schemas/$Distance.js'
export { $ElectricityConsumption } from './schemas/$ElectricityConsumption.js'
export { $ElectricityEstimateRequest } from './schemas/$ElectricityEstimateRequest.js'
export { $EmissionEstimate } from './schemas/$EmissionEstimate.js'
export { $Error } from './schemas/$Error.js'
export { $Errors } from './schemas/$Errors.js'
export { $FlightEstimateRequest } from './schemas/$FlightEstimateRequest.js'
export { $HugeOilTankerSeaShippingMethod } from './schemas/$HugeOilTankerSeaShippingMethod.js'
export { $IATACode } from './schemas/$IATACode.js'
export { $ICAOCode } from './schemas/$ICAOCode.js'
export { $IdentifiedVesselShippingMethod } from './schemas/$IdentifiedVesselShippingMethod.js'
export { $IntegerPercentage } from './schemas/$IntegerPercentage.js'
export { $Mass } from './schemas/$Mass.js'
export { $Merchant } from './schemas/$Merchant.js'
export { $Metadata } from './schemas/$Metadata.js'
export { $MonetaryAmount } from './schemas/$MonetaryAmount.js'
export { $Money } from './schemas/$Money.js'
export { $OffsetLink } from './schemas/$OffsetLink.js'
export { $OffsetLinkAnalytics } from './schemas/$OffsetLinkAnalytics.js'
export { $OffsetLinkOrder } from './schemas/$OffsetLinkOrder.js'
export { $OffsetLinkRequest } from './schemas/$OffsetLinkRequest.js'
export { $OffsetLinkStatus } from './schemas/$OffsetLinkStatus.js'
export { $OffsetLinkUpdateRequest } from './schemas/$OffsetLinkUpdateRequest.js'
export { $OffsetQuantitySeriesItem } from './schemas/$OffsetQuantitySeriesItem.js'
export { $OffsetValueSeriesItem } from './schemas/$OffsetValueSeriesItem.js'
export { $Order } from './schemas/$Order.js'
export { $OrderBase } from './schemas/$OrderBase.js'
export { $OrderBundle } from './schemas/$OrderBundle.js'
export { $OrderByQuantity } from './schemas/$OrderByQuantity.js'
export { $OrderByValue } from './schemas/$OrderByValue.js'
export { $OrderProject } from './schemas/$OrderProject.js'
export { $OrderQuoteBase } from './schemas/$OrderQuoteBase.js'
export { $OrderQuoteByQuantity } from './schemas/$OrderQuoteByQuantity.js'
export { $OrderQuoteByQuantityRequest } from './schemas/$OrderQuoteByQuantityRequest.js'
export { $OrderQuoteByValue } from './schemas/$OrderQuoteByValue.js'
export { $OrderQuoteByValueRequest } from './schemas/$OrderQuoteByValueRequest.js'
export { $PaginatedActivity } from './schemas/$PaginatedActivity.js'
export { $PaginatedBase } from './schemas/$PaginatedBase.js'
export { $PaginatedBundles } from './schemas/$PaginatedBundles.js'
export { $PaginatedOffsetLinks } from './schemas/$PaginatedOffsetLinks.js'
export { $PaginatedOrders } from './schemas/$PaginatedOrders.js'
export { $PaginatedProjects } from './schemas/$PaginatedProjects.js'
export { $Project } from './schemas/$Project.js'
export { $ProjectSummary } from './schemas/$ProjectSummary.js'
export { $RoRoSeaShippingMethod } from './schemas/$RoRoSeaShippingMethod.js'
export { $SeaShippingMethod } from './schemas/$SeaShippingMethod.js'
export { $Shipment } from './schemas/$Shipment.js'
export { $ShippingEstimateRequest } from './schemas/$ShippingEstimateRequest.js'
export { $ShippingMethod } from './schemas/$ShippingMethod.js'
export { $SimpleShippingMethod } from './schemas/$SimpleShippingMethod.js'
export { $SourceDestination } from './schemas/$SourceDestination.js'
export { $Timestamp } from './schemas/$Timestamp.js'
export { $TransactionEstimateRequest } from './schemas/$TransactionEstimateRequest.js'
export { $UpdateWebhookRequest } from './schemas/$UpdateWebhookRequest.js'
export { $Url } from './schemas/$Url.js'
export { $VariableFuelSeaShippingMethod } from './schemas/$VariableFuelSeaShippingMethod.js'
export { $VariableFuelVariableLoadSeaShippingMethod } from './schemas/$VariableFuelVariableLoadSeaShippingMethod.js'
export { $Webhook } from './schemas/$Webhook.js'
export { $WebhookEvent } from './schemas/$WebhookEvent.js'
export { $WebhookRequest } from './schemas/$WebhookRequest.js'
export { AccountsService } from './services/AccountsService.js'
export { ActivityService } from './services/ActivityService.js'
export { AnalyticsService } from './services/AnalyticsService.js'
export { BundleSelectionsService } from './services/BundleSelectionsService.js'
export { EmissionEstimatesService } from './services/EmissionEstimatesService.js'
export { OffsetLinksService } from './services/OffsetLinksService.js'
export { OrdersService } from './services/OrdersService.js'
export { ProjectsService } from './services/ProjectsService.js'
export { WebhookRequestService } from './services/WebhookRequestService.js'
export { WebhooksService } from './services/WebhooksService.js'

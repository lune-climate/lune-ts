import axios, { AxiosInstance } from 'axios'
import camelCaseKeys from 'camelcase-keys'

import { ClientConfig } from './core/ClientConfig'
import { AccountsService } from './services/AccountsService.js'
import { ActivityService } from './services/ActivityService.js'
import { AnalyticsService } from './services/AnalyticsService.js'
import { BundleMixesService } from './services/BundleMixesService.js'
import { BundlePortfoliosService } from './services/BundlePortfoliosService.js'
import { BundleSelectionsService } from './services/BundleSelectionsService.js'
import { ClientAccountsService } from './services/ClientAccountsService.js'
import { EmissionEstimatesService } from './services/EmissionEstimatesService.js'
import { OffsetLinksService } from './services/OffsetLinksService.js'
import { OrdersService } from './services/OrdersService.js'
import { ProjectsService } from './services/ProjectsService.js'
import { SustainabilityPageService } from './services/SustainabilityPageService.js'
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

    constructor(
        apiKey: string,
        baseUrl: string = 'https://api.lune.co',
        apiVersion: string = '1',
        account?: string,
    ) {
        this.config = {
            BASE_URL: `${baseUrl}/v{api-version}`,
            VERSION: apiVersion,
            BEARER_TOKEN: apiKey,
            ACCOUNT: account,
        }
        this.client = axios.create()

        // Convert to camelCase when receiving request
        this.client.interceptors.response.use((response) => {
            return { ...response, data: camelCaseKeys(response.data, { deep: true }) }
        })
    }

    public setAccount(accountId: string) {
        this.config.ACCOUNT = accountId
    }
}

applyMixins(LuneClient, [
    AccountsService,
    ActivityService,
    AnalyticsService,
    BundleMixesService,
    BundlePortfoliosService,
    BundleSelectionsService,
    ClientAccountsService,
    EmissionEstimatesService,
    OffsetLinksService,
    OrdersService,
    ProjectsService,
    SustainabilityPageService,
    WebhookRequestService,
    WebhooksService,
])

// eslint-disable-next-line no-redeclare -- mixins require same name
export interface LuneClient
    extends AccountsService,
        ActivityService,
        AnalyticsService,
        BundleMixesService,
        BundlePortfoliosService,
        BundleSelectionsService,
        ClientAccountsService,
        EmissionEstimatesService,
        OffsetLinksService,
        OrdersService,
        ProjectsService,
        SustainabilityPageService,
        WebhookRequestService,
        WebhooksService {}

export { Account } from './models/Account.js'
export type { AccountBase } from './models/AccountBase.js'
export type { AccountPair } from './models/AccountPair.js'
export { AccountScope } from './models/AccountScope.js'
export { AccountType } from './models/AccountType.js'
export { Activity } from './models/Activity.js'
export type { Address } from './models/Address.js'
export type { AirportCode } from './models/AirportCode.js'
export type { AirportSourceDestination } from './models/AirportSourceDestination.js'
export type { Analytics } from './models/Analytics.js'
export type { AnalyticsByBundle } from './models/AnalyticsByBundle.js'
export type { AnalyticsMetrics } from './models/AnalyticsMetrics.js'
export { Area } from './models/Area.js'
export type { Bundle } from './models/Bundle.js'
export type { BundlePercentage } from './models/BundlePercentage.js'
export type { BundlePercentageRequest } from './models/BundlePercentageRequest.js'
export type { BundlePortfolio } from './models/BundlePortfolio.js'
export type { BundleSelection } from './models/BundleSelection.js'
export type { BundleSelectionRequest } from './models/BundleSelectionRequest.js'
export { BundleSummary } from './models/BundleSummary.js'
export { CabinClass } from './models/CabinClass.js'
export { ClientAccount } from './models/ClientAccount.js'
export { CloudProvider } from './models/CloudProvider.js'
export type { CompanyCloudUse } from './models/CompanyCloudUse.js'
export type { CompanyEmissionEstimate } from './models/CompanyEmissionEstimate.js'
export type { CompanyEstimateRequest } from './models/CompanyEstimateRequest.js'
export type { CompanyOnPremiseUse } from './models/CompanyOnPremiseUse.js'
export { ContainerShippingMethod } from './models/ContainerShippingMethod.js'
export type { CreateAccountRequest } from './models/CreateAccountRequest.js'
export type { CreateClientAccountRequest } from './models/CreateClientAccountRequest.js'
export type { CreateOrderByEstimateRequest } from './models/CreateOrderByEstimateRequest.js'
export type { CreateOrderByQuantityRequest } from './models/CreateOrderByQuantityRequest.js'
export type { CreateOrderByValueRequest } from './models/CreateOrderByValueRequest.js'
export type { CreateWebhookRequest } from './models/CreateWebhookRequest.js'
export type { CumulativeBundleAnalytics } from './models/CumulativeBundleAnalytics.js'
export type { CurrencyCode } from './models/CurrencyCode.js'
export { Diet } from './models/Diet.js'
export { Distance } from './models/Distance.js'
export { ElectricityConsumption } from './models/ElectricityConsumption.js'
export type { ElectricityEstimateRequest } from './models/ElectricityEstimateRequest.js'
export type { EmissionEstimate } from './models/EmissionEstimate.js'
export type { EmissionEstimateResponse } from './models/EmissionEstimateResponse.js'
export { Error } from './models/Error.js'
export type { Errors } from './models/Errors.js'
export type { FlightEstimateRequest } from './models/FlightEstimateRequest.js'
export type { GeographicCoordinates } from './models/GeographicCoordinates.js'
export { HugeOilTankerSeaShippingMethod } from './models/HugeOilTankerSeaShippingMethod.js'
export type { IATACode } from './models/IATACode.js'
export type { ICAOCode } from './models/ICAOCode.js'
export type { IdentifiedVesselShippingMethod } from './models/IdentifiedVesselShippingMethod.js'
export { IndividualEstimateRequest } from './models/IndividualEstimateRequest.js'
export type { IntegerPercentage } from './models/IntegerPercentage.js'
export type { Mass } from './models/Mass.js'
export { MassUnit } from './models/MassUnit.js'
export { Media } from './models/Media.js'
export type { Merchant } from './models/Merchant.js'
export type { Metadata } from './models/Metadata.js'
export type { MonetaryAmount } from './models/MonetaryAmount.js'
export type { MonetaryAmountValue } from './models/MonetaryAmountValue.js'
export type { Money } from './models/Money.js'
export type { MultiLegShippingEmissionEstimate } from './models/MultiLegShippingEmissionEstimate.js'
export type { MultiLegShippingEstimateRequest } from './models/MultiLegShippingEstimateRequest.js'
export type { OffsetLink } from './models/OffsetLink.js'
export type { OffsetLinkAnalytics } from './models/OffsetLinkAnalytics.js'
export type { OffsetLinkOrder } from './models/OffsetLinkOrder.js'
export type { OffsetLinkRequest } from './models/OffsetLinkRequest.js'
export { OffsetLinkStatus } from './models/OffsetLinkStatus.js'
export type { OffsetLinkUpdateRequest } from './models/OffsetLinkUpdateRequest.js'
export type { OffsetQuantitySeriesItem } from './models/OffsetQuantitySeriesItem.js'
export type { OffsetValueSeriesItem } from './models/OffsetValueSeriesItem.js'
export type { Order } from './models/Order.js'
export { OrderBase } from './models/OrderBase.js'
export type { OrderBundle } from './models/OrderBundle.js'
export type { OrderByEstimate } from './models/OrderByEstimate.js'
export type { OrderByQuantity } from './models/OrderByQuantity.js'
export type { OrderByQuantityProperties } from './models/OrderByQuantityProperties.js'
export type { OrderByValue } from './models/OrderByValue.js'
export type { OrderByValueProperties } from './models/OrderByValueProperties.js'
export type { OrderEventDetails } from './models/OrderEventDetails.js'
export type { OrderProject } from './models/OrderProject.js'
export type { OrderQuoteBase } from './models/OrderQuoteBase.js'
export type { OrderQuoteByQuantity } from './models/OrderQuoteByQuantity.js'
export type { OrderQuoteByQuantityRequest } from './models/OrderQuoteByQuantityRequest.js'
export type { OrderQuoteByValue } from './models/OrderQuoteByValue.js'
export type { OrderQuoteByValueRequest } from './models/OrderQuoteByValueRequest.js'
export type { PaginatedAccounts } from './models/PaginatedAccounts.js'
export type { PaginatedActivity } from './models/PaginatedActivity.js'
export type { PaginatedBase } from './models/PaginatedBase.js'
export type { PaginatedBundles } from './models/PaginatedBundles.js'
export type { PaginatedClientAccounts } from './models/PaginatedClientAccounts.js'
export type { PaginatedOffsetLinks } from './models/PaginatedOffsetLinks.js'
export type { PaginatedOrders } from './models/PaginatedOrders.js'
export type { PaginatedProjects } from './models/PaginatedProjects.js'
export type { PassengerFlightEstimateRequest } from './models/PassengerFlightEstimateRequest.js'
export { PassengerRailEstimateRequest } from './models/PassengerRailEstimateRequest.js'
export { PassengerRoadEstimateRequest } from './models/PassengerRoadEstimateRequest.js'
export type { PassengerTransportationEmissionEstimate } from './models/PassengerTransportationEmissionEstimate.js'
export type { PassengerTransportationEstimateRequest } from './models/PassengerTransportationEstimateRequest.js'
export type { Project } from './models/Project.js'
export type { ProjectSummary } from './models/ProjectSummary.js'
export { PublicSustainabilityPage } from './models/PublicSustainabilityPage.js'
export type { QuantityAndValueTimeseries } from './models/QuantityAndValueTimeseries.js'
export { Registry } from './models/Registry.js'
export { RoRoSeaShippingMethod } from './models/RoRoSeaShippingMethod.js'
export type { SeaShippingMethod } from './models/SeaShippingMethod.js'
export { Shipment } from './models/Shipment.js'
export type { ShippingCountryCode } from './models/ShippingCountryCode.js'
export type { ShippingEstimateRequest } from './models/ShippingEstimateRequest.js'
export type { ShippingLegEmissionEstimate } from './models/ShippingLegEmissionEstimate.js'
export type { ShippingMethod } from './models/ShippingMethod.js'
export type { ShippingRoute } from './models/ShippingRoute.js'
export { SimpleShippingMethod } from './models/SimpleShippingMethod.js'
export type { SingleShippingEmissionEstimate } from './models/SingleShippingEmissionEstimate.js'
export type { SourceDestination } from './models/SourceDestination.js'
export type { SustainabilityPage } from './models/SustainabilityPage.js'
export type { SustainabilityPageCustomDescription } from './models/SustainabilityPageCustomDescription.js'
export { SustainabilityPageDescription } from './models/SustainabilityPageDescription.js'
export type { SustainabilityPageRequest } from './models/SustainabilityPageRequest.js'
export { SustainabilityPageSection } from './models/SustainabilityPageSection.js'
export type { SustainabilityPageSections } from './models/SustainabilityPageSections.js'
export type { SustainabilityPageSlug } from './models/SustainabilityPageSlug.js'
export { SustainabilityPageStatus } from './models/SustainabilityPageStatus.js'
export { SustainabilityPageTitle } from './models/SustainabilityPageTitle.js'
export type { Timestamp } from './models/Timestamp.js'
export type { TransactionEstimateRequest } from './models/TransactionEstimateRequest.js'
export type { UpdateAccountRequest } from './models/UpdateAccountRequest.js'
export type { UpdateWebhookRequest } from './models/UpdateWebhookRequest.js'
export type { Url } from './models/Url.js'
export { VariableFuelSeaShippingMethod } from './models/VariableFuelSeaShippingMethod.js'
export { VariableFuelVariableLoadSeaShippingMethod } from './models/VariableFuelVariableLoadSeaShippingMethod.js'
export type { Webhook } from './models/Webhook.js'
export { WebhookEvent } from './models/WebhookEvent.js'
export type { WebhookRequest } from './models/WebhookRequest.js'

export { AccountsService } from './services/AccountsService.js'
export { ActivityService } from './services/ActivityService.js'
export { AnalyticsService } from './services/AnalyticsService.js'
export { BundleMixesService } from './services/BundleMixesService.js'
export { BundlePortfoliosService } from './services/BundlePortfoliosService.js'
export { BundleSelectionsService } from './services/BundleSelectionsService.js'
export { ClientAccountsService } from './services/ClientAccountsService.js'
export { EmissionEstimatesService } from './services/EmissionEstimatesService.js'
export { OffsetLinksService } from './services/OffsetLinksService.js'
export { OrdersService } from './services/OrdersService.js'
export { ProjectsService } from './services/ProjectsService.js'
export { SustainabilityPageService } from './services/SustainabilityPageService.js'
export { WebhookRequestService } from './services/WebhookRequestService.js'
export { WebhooksService } from './services/WebhooksService.js'

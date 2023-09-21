import axios, { AxiosInstance, AxiosResponse, isAxiosError } from 'axios'
import camelCaseKeys from 'camelcase-keys'

import { ClientConfig } from './core/ClientConfig.js'
import { AccountsService } from './services/AccountsService.js'
import { AnalyticsService } from './services/AnalyticsService.js'
import { BundlePortfoliosService } from './services/BundlePortfoliosService.js'
import { BundleSelectionsService } from './services/BundleSelectionsService.js'
import { BundlesService } from './services/BundlesService.js'
import { ClientAccountsService } from './services/ClientAccountsService.js'
import { EmissionEstimatesService } from './services/EmissionEstimatesService.js'
import { EmissionFactorsService } from './services/EmissionFactorsService.js'
import { OrdersService } from './services/OrdersService.js'
import { PaymentsService } from './services/PaymentsService.js'
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
        const camelCaseResponse = (response: AxiosResponse<unknown, unknown>) => ({
            ...response,
            // SAFETY: The camelcase-keys type definitions are overly restrictive. The function
            // handles all kinds of values just fine: arrays, numbers, strings, null etc.
            //
            // Instead of writing a bunch of type-detecting conditional code to satisfy the
            // TS compiler let's just wholesale ignore this type mismatch – we don't know what
            // value do we actually deal with here but the library will handle it.
            data: camelCaseKeys(response.data as any, { deep: true }),
        })
        this.client.interceptors.response.use(camelCaseResponse, (error: unknown) => {
            // There's a separate, slightly different callback for errors.
            if (!isAxiosError(error)) {
                throw error
            }
            if (error.response) {
                error.response = camelCaseResponse(error.response)
            }
            // We need to return a rejected promise for it to work nice with axios.
            return Promise.reject(error)
        })
    }

    public setAccount(accountId: string) {
        this.config.ACCOUNT = accountId
    }
}

applyMixins(LuneClient, [
    AccountsService,
    AnalyticsService,
    BundlePortfoliosService,
    BundlesService,
    BundleSelectionsService,
    ClientAccountsService,
    EmissionEstimatesService,
    EmissionFactorsService,
    OrdersService,
    PaymentsService,
    ProjectsService,
    SustainabilityPageService,
    WebhookRequestService,
    WebhooksService,
])

// eslint-disable-next-line no-redeclare -- mixins require same name
export interface LuneClient
    extends AccountsService,
        AnalyticsService,
        BundlePortfoliosService,
        BundlesService,
        BundleSelectionsService,
        ClientAccountsService,
        EmissionEstimatesService,
        EmissionFactorsService,
        OrdersService,
        PaymentsService,
        ProjectsService,
        SustainabilityPageService,
        WebhookRequestService,
        WebhooksService {}

export { Account } from './models/Account.js'
export type { AccountBase } from './models/AccountBase.js'
export type { AccountPair } from './models/AccountPair.js'
export { AccountScope } from './models/AccountScope.js'
export { AccountType } from './models/AccountType.js'
export type { Address } from './models/Address.js'
export type { AggregatedAnalyticsByProperty } from './models/AggregatedAnalyticsByProperty.js'
export type { AirportCode } from './models/AirportCode.js'
export type { AirportSourceDestination } from './models/AirportSourceDestination.js'
export type { AllocationEventDetails } from './models/AllocationEventDetails.js'
export type { Analytics } from './models/Analytics.js'
export type { AnalyticsByBundle } from './models/AnalyticsByBundle.js'
export type { AnalyticsMetrics } from './models/AnalyticsMetrics.js'
export { Area } from './models/Area.js'
export type { BatchTransactionEmissionEstimate } from './models/BatchTransactionEmissionEstimate.js'
export type { BatchTransactionEstimateRequest } from './models/BatchTransactionEstimateRequest.js'
export type { Bundle } from './models/Bundle.js'
export type { BundleMass } from './models/BundleMass.js'
export type { BundlePercentage } from './models/BundlePercentage.js'
export type { BundlePercentageRequest } from './models/BundlePercentageRequest.js'
export type { BundlePortfolio } from './models/BundlePortfolio.js'
export type { BundleSelection } from './models/BundleSelection.js'
export type { BundleSelectionRequest } from './models/BundleSelectionRequest.js'
export { BundleSummary } from './models/BundleSummary.js'
export { CabinClass } from './models/CabinClass.js'
export type { CalculatedRoute } from './models/CalculatedRoute.js'
export type { CalculatedRouteLeg } from './models/CalculatedRouteLeg.js'
export type { CalculatedRouteLocation } from './models/CalculatedRouteLocation.js'
export { ClientAccount } from './models/ClientAccount.js'
export { CloudProvider } from './models/CloudProvider.js'
export type { CompanyCloudUse } from './models/CompanyCloudUse.js'
export type { CompanyEmissionEstimate } from './models/CompanyEmissionEstimate.js'
export type { CompanyEstimateRequest } from './models/CompanyEstimateRequest.js'
export type { CompanyOnPremiseUse } from './models/CompanyOnPremiseUse.js'
export { ContainerShippingMethod } from './models/ContainerShippingMethod.js'
export type { ConvertedShipment } from './models/ConvertedShipment.js'
export type { CountTimeseries } from './models/CountTimeseries.js'
export type { CreateAccountRequest } from './models/CreateAccountRequest.js'
export type { CreateClientAccountRequest } from './models/CreateClientAccountRequest.js'
export type { CreateOrderByEstimateRequest } from './models/CreateOrderByEstimateRequest.js'
export type { CreateOrderByQuantityRequest } from './models/CreateOrderByQuantityRequest.js'
export type { CreateOrderByQuantityWithBundleMass } from './models/CreateOrderByQuantityWithBundleMass.js'
export type { CreateOrderByQuantityWithBundlePercentage } from './models/CreateOrderByQuantityWithBundlePercentage.js'
export type { CreateOrderByValueRequest } from './models/CreateOrderByValueRequest.js'
export type { CreateWebhookRequest } from './models/CreateWebhookRequest.js'
export type { CumulativeBundleAnalytics } from './models/CumulativeBundleAnalytics.js'
export { CurrencyCode } from './models/CurrencyCode.js'
export { Diet } from './models/Diet.js'
export { Distance } from './models/Distance.js'
export { DistanceCalculationMethod } from './models/DistanceCalculationMethod.js'
export { DistanceUnit } from './models/DistanceUnit.js'
export { ElectricityConsumption } from './models/ElectricityConsumption.js'
export type { ElectricityEmissionEstimate } from './models/ElectricityEmissionEstimate.js'
export type { ElectricityEstimateRequest } from './models/ElectricityEstimateRequest.js'
export type { EmissionCalculationMetrics } from './models/EmissionCalculationMetrics.js'
export type { EmissionEstimate } from './models/EmissionEstimate.js'
export type { EmissionEstimateResponse } from './models/EmissionEstimateResponse.js'
export type { EmissionFactor } from './models/EmissionFactor.js'
export type { EmissionFactorActivity } from './models/EmissionFactorActivity.js'
export type { EmissionFactorDenominatorUnit } from './models/EmissionFactorDenominatorUnit.js'
export type { EmissionFactorEstimate } from './models/EmissionFactorEstimate.js'
export type { EmissionFactorEstimateRequest } from './models/EmissionFactorEstimateRequest.js'
export { EmissionFactorLogicalUnit } from './models/EmissionFactorLogicalUnit.js'
export type { EmissionFactorRegions } from './models/EmissionFactorRegions.js'
export { EmissionFactorSource } from './models/EmissionFactorSource.js'
export type { EmptyObject } from './models/EmptyObject.js'
export { Error } from './models/Error.js'
export type { Errors } from './models/Errors.js'
export type { EstimateQuote } from './models/EstimateQuote.js'
export type { FlightEmissionEstimate } from './models/FlightEmissionEstimate.js'
export type { FlightEstimateRequest } from './models/FlightEstimateRequest.js'
export type { GasEmissions } from './models/GasEmissions.js'
export { GatedGasEmissions } from './models/GatedGasEmissions.js'
export type { GeographicCoordinates } from './models/GeographicCoordinates.js'
export { HugeOilTankerSeaShippingMethod } from './models/HugeOilTankerSeaShippingMethod.js'
export type { IATACode } from './models/IATACode.js'
export type { ICAOCode } from './models/ICAOCode.js'
export type { IdentifiedVesselShippingMethod } from './models/IdentifiedVesselShippingMethod.js'
export type { IndividualEmissionEstimate } from './models/IndividualEmissionEstimate.js'
export { IndividualEstimateRequest } from './models/IndividualEstimateRequest.js'
export type { IntegerPercentage } from './models/IntegerPercentage.js'
export type { Locode } from './models/Locode.js'
export { LogisticsSiteMethod } from './models/LogisticsSiteMethod.js'
export type { Mass } from './models/Mass.js'
export { MassUnit } from './models/MassUnit.js'
export { Media } from './models/Media.js'
export type { Merchant } from './models/Merchant.js'
export type { Metadata } from './models/Metadata.js'
export type { MonetaryAmount } from './models/MonetaryAmount.js'
export type { MonetaryAmountValue } from './models/MonetaryAmountValue.js'
export type { Money } from './models/Money.js'
export type { MuiIcon } from './models/MuiIcon.js'
export type { MultiLegShippingEmissionEstimate } from './models/MultiLegShippingEmissionEstimate.js'
export type { MultiLegShippingEstimateRequest } from './models/MultiLegShippingEstimateRequest.js'
export type { NullEnum } from './models/NullEnum.js'
export { OffsetType } from './models/OffsetType.js'
export type { Order } from './models/Order.js'
export { OrderAllocation } from './models/OrderAllocation.js'
export { OrderBase } from './models/OrderBase.js'
export type { OrderBundle } from './models/OrderBundle.js'
export type { OrderByEstimate } from './models/OrderByEstimate.js'
export type { OrderByQuantity } from './models/OrderByQuantity.js'
export type { OrderByQuantityProperties } from './models/OrderByQuantityProperties.js'
export type { OrderByValue } from './models/OrderByValue.js'
export type { OrderByValueProperties } from './models/OrderByValueProperties.js'
export type { OrderEventDetails } from './models/OrderEventDetails.js'
export type { OrderPayment } from './models/OrderPayment.js'
export { OrderProject } from './models/OrderProject.js'
export type { OrderQuoteBase } from './models/OrderQuoteBase.js'
export type { OrderQuoteByQuantity } from './models/OrderQuoteByQuantity.js'
export type { OrderQuoteByQuantityRequest } from './models/OrderQuoteByQuantityRequest.js'
export type { OrderQuoteByQuantityWithBundleMass } from './models/OrderQuoteByQuantityWithBundleMass.js'
export type { OrderQuoteByQuantityWithBundlePercentage } from './models/OrderQuoteByQuantityWithBundlePercentage.js'
export type { OrderQuoteByValue } from './models/OrderQuoteByValue.js'
export type { OrderQuoteByValueRequest } from './models/OrderQuoteByValueRequest.js'
export type { PaginatedAccounts } from './models/PaginatedAccounts.js'
export type { PaginatedBase } from './models/PaginatedBase.js'
export type { PaginatedBundles } from './models/PaginatedBundles.js'
export type { PaginatedClientAccounts } from './models/PaginatedClientAccounts.js'
export type { PaginatedEmissionFactors } from './models/PaginatedEmissionFactors.js'
export type { PaginatedOrders } from './models/PaginatedOrders.js'
export type { PaginatedProjects } from './models/PaginatedProjects.js'
export type { PartialUpdateAccountRequest } from './models/PartialUpdateAccountRequest.js'
export type { PassengerFlightEstimateRequest } from './models/PassengerFlightEstimateRequest.js'
export { PassengerRailEstimateRequest } from './models/PassengerRailEstimateRequest.js'
export { PassengerRoadEstimateRequest } from './models/PassengerRoadEstimateRequest.js'
export type { PassengerTransportationEmissionEstimate } from './models/PassengerTransportationEmissionEstimate.js'
export type { PassengerTransportationEstimateRequest } from './models/PassengerTransportationEstimateRequest.js'
export type { Payment } from './models/Payment.js'
export { Project } from './models/Project.js'
export type { ProjectSummary } from './models/ProjectSummary.js'
export { PublicSustainabilityPage } from './models/PublicSustainabilityPage.js'
export type { QuantityAndValueTimeseries } from './models/QuantityAndValueTimeseries.js'
export { Registry } from './models/Registry.js'
export { RoRoSeaShippingMethod } from './models/RoRoSeaShippingMethod.js'
export type { SeaShippingMethod } from './models/SeaShippingMethod.js'
export type { SetBundlePortfolioRequest } from './models/SetBundlePortfolioRequest.js'
export { Shipment } from './models/Shipment.js'
export { ShipmentConversionMethod } from './models/ShipmentConversionMethod.js'
export type { ShippingCountryCode } from './models/ShippingCountryCode.js'
export type { ShippingEstimateRequest } from './models/ShippingEstimateRequest.js'
export type { ShippingLegEmissionEstimate } from './models/ShippingLegEmissionEstimate.js'
export type { ShippingMethod } from './models/ShippingMethod.js'
export type { ShippingRoute } from './models/ShippingRoute.js'
export type { ShippingSourceDestination } from './models/ShippingSourceDestination.js'
export { SimpleShippingMethod } from './models/SimpleShippingMethod.js'
export type { SingleShippingEmissionEstimate } from './models/SingleShippingEmissionEstimate.js'
export type { SourceDestination } from './models/SourceDestination.js'
export type { SupportedUNSdg } from './models/SupportedUNSdg.js'
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
export type { TitleAndDescription } from './models/TitleAndDescription.js'
export type { TransactionEmissionEstimate } from './models/TransactionEmissionEstimate.js'
export type { TransactionEstimateRequest } from './models/TransactionEstimateRequest.js'
export type { UpdateAccountRequest } from './models/UpdateAccountRequest.js'
export type { UpdateWebhookRequest } from './models/UpdateWebhookRequest.js'
export type { UploadLogoRequest } from './models/UploadLogoRequest.js'
export type { UploadLogoResponse } from './models/UploadLogoResponse.js'
export type { Url } from './models/Url.js'
export { VariableFuelSeaShippingMethod } from './models/VariableFuelSeaShippingMethod.js'
export { VariableFuelVariableLoadSeaShippingMethod } from './models/VariableFuelVariableLoadSeaShippingMethod.js'
export type { Webhook } from './models/Webhook.js'
export type { WebhookBase } from './models/WebhookBase.js'
export { WebhookEvent } from './models/WebhookEvent.js'
export type { WebhookFullSecret } from './models/WebhookFullSecret.js'
export type { WebhookRequest } from './models/WebhookRequest.js'

export { AccountsService } from './services/AccountsService.js'
export { AnalyticsService } from './services/AnalyticsService.js'
export { BundlePortfoliosService } from './services/BundlePortfoliosService.js'
export { BundlesService } from './services/BundlesService.js'
export { BundleSelectionsService } from './services/BundleSelectionsService.js'
export { ClientAccountsService } from './services/ClientAccountsService.js'
export { EmissionEstimatesService } from './services/EmissionEstimatesService.js'
export { EmissionFactorsService } from './services/EmissionFactorsService.js'
export { OrdersService } from './services/OrdersService.js'
export { PaymentsService } from './services/PaymentsService.js'
export { ProjectsService } from './services/ProjectsService.js'
export { SustainabilityPageService } from './services/SustainabilityPageService.js'
export { WebhookRequestService } from './services/WebhookRequestService.js'
export { WebhooksService } from './services/WebhooksService.js'

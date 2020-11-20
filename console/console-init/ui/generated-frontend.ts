import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Address_Consoleapi_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  spec: AddressSpec_Enmasse_Io_V1beta1;
  status?: Maybe<AddressStatus_Enmasse_Io_V1beta1>;
  links: LinkQueryResult_Consoleapi_Enmasse_Io_V1beta1;
  metrics?: Maybe<Array<Metric_Consoleapi_Enmasse_Io_V1beta1>>;
};


export type Address_Consoleapi_Enmasse_Io_V1beta1LinksArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};

export type Address_Enmasse_Io_V1beta1_Input = {
  metadata?: Maybe<ObjectMeta_V1_Input>;
  spec?: Maybe<AddressSpec_Enmasse_Io_V1beta1_Input>;
};

export type AddressConfig_Iot_Enmasse_Io_V1alpha1 = {
  name: Scalars['String'];
  plan: Scalars['String'];
  type: Scalars['String'];
};

export type AddressesConfig_Iot_Enmasse_Io_V1alpha1 = {
  Telemetry: AddressConfig_Iot_Enmasse_Io_V1alpha1;
  Event: AddressConfig_Iot_Enmasse_Io_V1alpha1;
  Command: Array<AddressConfig_Iot_Enmasse_Io_V1alpha1>;
};

export type AddressPlan_Admin_Enmasse_Io_V1 = {
  metadata: ObjectMeta_V1;
  spec: AddressPlanSpec_Admin_Enmasse_Io_V1;
};

export type AddressPlanSpec_Admin_Enmasse_Io_V1 = {
  addressType: AddressType;
  displayName: Scalars['String'];
  longDescription: Scalars['String'];
  shortDescription: Scalars['String'];
  displayOrder: Scalars['Int'];
};

export type AddressPlanStatus_Enmasse_Io_V1beta1 = {
  name: Scalars['String'];
  partitions: Scalars['Int'];
};

export type AddressQueryResult_Consoleapi_Enmasse_Io_V1beta1 = {
  total: Scalars['Int'];
  addresses: Array<Address_Consoleapi_Enmasse_Io_V1beta1>;
};

export type AddressSpace_Consoleapi_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  kind: Scalars['String'];
  spec: AddressSpaceSpec_Enmasse_Io_V1beta1;
  status?: Maybe<AddressSpaceStatus_Enmasse_Io_V1beta1>;
  connections: ConnectionQueryResult_Consoleapi_Enmasse_Io_V1beta1;
  addresses: AddressQueryResult_Consoleapi_Enmasse_Io_V1beta1;
  metrics?: Maybe<Array<Metric_Consoleapi_Enmasse_Io_V1beta1>>;
};


export type AddressSpace_Consoleapi_Enmasse_Io_V1beta1ConnectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type AddressSpace_Consoleapi_Enmasse_Io_V1beta1AddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};

export type AddressSpace_Enmasse_Io_V1beta1_Input = {
  metadata?: Maybe<ObjectMeta_V1_Input>;
  spec?: Maybe<AddressSpaceSpec_Enmasse_Io_V1beta1_Input>;
};

export type AddressSpaceConfig_Iot_Enmasse_Io_V1alpha1 = {
  name: Scalars['String'];
  plan: Scalars['String'];
  type: Scalars['String'];
};

export type AddressSpacePlan_Admin_Enmasse_Io_V1 = {
  metadata: ObjectMeta_V1;
  spec: AddressSpacePlanSpec_Admin_Enmasse_Io_V1;
};

export type AddressSpacePlanSpec_Admin_Enmasse_Io_V1 = {
  addressPlans: Array<AddressPlan_Admin_Enmasse_Io_V1>;
  addressSpaceType?: Maybe<AddressSpaceType>;
  displayName: Scalars['String'];
  longDescription: Scalars['String'];
  shortDescription: Scalars['String'];
  displayOrder: Scalars['Int'];
};

export type AddressSpaceQueryResult_Consoleapi_Enmasse_Io_V1beta1 = {
  total: Scalars['Int'];
  addressSpaces: Array<AddressSpace_Consoleapi_Enmasse_Io_V1beta1>;
};

export type AddressSpaceSchema_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  spec: AddressSpaceSchemaSpec_Enmasse_Io_V1beta1;
};

export type AddressSpaceSchemaSpec_Enmasse_Io_V1beta1 = {
  authenticationServices?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  routeServicePorts: Array<RouteServicePortDescription_Enmasse_Io_V1beta1>;
  certificateProviderTypes: Array<CertificateProviderTypeDescription_Enmasse_Io_V1beta1>;
  endpointExposeTypes: Array<EndpointExposeTypeDescription_Enmasse_Io_V1beta1>;
};

export type AddressSpaceSpec_Enmasse_Io_V1beta1 = {
  plan: AddressSpacePlan_Admin_Enmasse_Io_V1;
  type: AddressSpaceType;
  authenticationService?: Maybe<AuthenticationService_Enmasse_Io_V1beta1>;
  endpoints?: Maybe<Array<EndpointSpec_Enmasse_Io_V1beta1>>;
};

export type AddressSpaceSpec_Enmasse_Io_V1beta1_Input = {
  type: Scalars['String'];
  plan: Scalars['String'];
  authenticationService?: Maybe<AuthenticationService_Enmasse_Io_V1beta1_Input>;
  endpoints?: Maybe<Array<EndpointSpec_Enmasse_Io_V1beta1_Input>>;
};

export type AddressSpaceStatus_Enmasse_Io_V1beta1 = {
  isReady: Scalars['Boolean'];
  messages?: Maybe<Array<Scalars['String']>>;
  phase: Scalars['String'];
  caCertificate?: Maybe<Scalars['String']>;
  endpointStatus: Array<EndpointStatus_Enmasse_Io_V1beta1>;
};

export enum AddressSpaceType {
  Standard = 'standard',
  Brokered = 'brokered'
}

export type AddressSpaceType_Consoleapi_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  spec: AddressTypeSpec_Consoleapi_Enmasse_Io_V1beta1;
};

export type AddressSpaceTypeSpec_Consoleapi_Enmasse_Io_V1beta1 = {
  addressSpaceType: AddressSpaceType;
  displayName: Scalars['String'];
  longDescription: Scalars['String'];
  shortDescription: Scalars['String'];
  displayOrder: Scalars['Int'];
};

export type AddressSpec_Enmasse_Io_V1beta1 = {
  address: Scalars['String'];
  addressSpace: Scalars['String'];
  type: AddressType;
  plan: AddressPlan_Admin_Enmasse_Io_V1;
  topic?: Maybe<Scalars['String']>;
};

export type AddressSpec_Enmasse_Io_V1beta1_Input = {
  address: Scalars['String'];
  addressSpace?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  plan: Scalars['String'];
  topic?: Maybe<Scalars['String']>;
};

export type AddressStatus_Enmasse_Io_V1beta1 = {
  isReady: Scalars['Boolean'];
  messages?: Maybe<Array<Scalars['String']>>;
  phase: Scalars['String'];
  planStatus?: Maybe<AddressPlanStatus_Enmasse_Io_V1beta1>;
};

export enum AddressType {
  Queue = 'queue',
  Topic = 'topic',
  Subscription = 'subscription',
  Multicast = 'multicast',
  Anycast = 'anycast'
}

export type AddressType_Consoleapi_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  spec: AddressTypeSpec_Consoleapi_Enmasse_Io_V1beta1;
};

export type AddressTypeSpec_Consoleapi_Enmasse_Io_V1beta1 = {
  addressSpaceType: AddressSpaceType;
  displayName: Scalars['String'];
  longDescription: Scalars['String'];
  shortDescription: Scalars['String'];
  displayOrder: Scalars['Int'];
};

export type AuthenticationService_Admin_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  spec: AuthenticationServiceSpec_Admin_Enmasse_Io_V1beta1;
  status: AuthenticationServiceStatus_Admin_Enmasse_Io_V1beta1;
};

export type AuthenticationService_Enmasse_Io_V1beta1 = {
  name: Scalars['String'];
};

export type AuthenticationService_Enmasse_Io_V1beta1_Input = {
  name: Scalars['String'];
};

export type AuthenticationServiceSpec_Admin_Enmasse_Io_V1beta1 = {
  type: AuthenticationServiceType;
};

export type AuthenticationServiceStatus_Admin_Enmasse_Io_V1beta1 = {
  host: Scalars['String'];
  port: Scalars['Int'];
};

export enum AuthenticationServiceType {
  None = 'none',
  Standard = 'standard'
}

export enum CertificateProviderType_Enmasse_Io_V1beta1 {
  Wildcard = 'wildcard',
  CertBundle = 'certBundle',
  Openshift = 'openshift',
  Selfsigned = 'selfsigned'
}

export type CertificateProviderTypeDescription_Enmasse_Io_V1beta1 = {
  name: CertificateProviderType_Enmasse_Io_V1beta1;
  displayName: Scalars['String'];
  description: Scalars['String'];
};

export type CertificateSpec_Enmasse_Io_V1beta1 = {
  provider: CertificateProviderType_Enmasse_Io_V1beta1;
  secretName?: Maybe<Scalars['String']>;
  tlsCert?: Maybe<Scalars['String']>;
  tlsKey?: Maybe<Scalars['String']>;
};

export type CertificateSpec_Enmasse_Io_V1beta1_Input = {
  provider: CertificateProviderType_Enmasse_Io_V1beta1;
  secretName?: Maybe<Scalars['String']>;
  tlsCert?: Maybe<Scalars['String']>;
  tlsKey?: Maybe<Scalars['String']>;
};

export type Connection_Consoleapi_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  spec: ConnectionSpec_Consoleapi_Enmasse_Io_V1beta1;
  metrics: Array<Metric_Consoleapi_Enmasse_Io_V1beta1>;
  links: LinkQueryResult_Consoleapi_Enmasse_Io_V1beta1;
};


export type Connection_Consoleapi_Enmasse_Io_V1beta1LinksArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};

export type ConnectionQueryResult_Consoleapi_Enmasse_Io_V1beta1 = {
  total: Scalars['Int'];
  connections: Array<Connection_Consoleapi_Enmasse_Io_V1beta1>;
};

export type ConnectionSpec_Consoleapi_Enmasse_Io_V1beta1 = {
  addressSpace: AddressSpace_Consoleapi_Enmasse_Io_V1beta1;
  hostname: Scalars['String'];
  containerId: Scalars['String'];
  protocol: Protocol;
  encrypted: Scalars['Boolean'];
  properties: Array<KeyValue>;
  principal: Scalars['String'];
};

export type CredentialsQueryResult_Consoleapi_Iot_Enmasse_Io_V1alpha1 = {
  total: Scalars['Int'];
  credentials: Scalars['String'];
};


export type Device = {
  deviceId: Scalars['String'];
  registration: Device_Registration_Iot_Console;
  status: Device_Status;
  credentials?: Maybe<Scalars['String']>;
};

export type Device_Iot_Console_Input = {
  deviceId?: Maybe<Scalars['String']>;
  registration?: Maybe<Device_Registration_Iot_Console_Input>;
  credentials?: Maybe<Scalars['String']>;
};

export type Device_Registration_Iot_Console = {
  enabled?: Maybe<Scalars['Boolean']>;
  via?: Maybe<Array<Maybe<Scalars['String']>>>;
  viaGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  memberOf?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaults?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
};

export type Device_Registration_Iot_Console_Input = {
  enabled?: Maybe<Scalars['Boolean']>;
  via?: Maybe<Array<Maybe<Scalars['String']>>>;
  viaGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  memberOf?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaults?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
};

export type Device_Status = {
  created: Scalars['Date'];
  updated: Scalars['Date'];
  lastUser?: Maybe<Scalars['String']>;
  lastSeen: Scalars['Date'];
};

export type DevicesQueryResult_Consoleapi_Iot_Enmasse_Io_V1alpha1 = {
  total: Scalars['Int'];
  devices: Array<Device>;
};

export type EndpointExposeTypeDescription_Enmasse_Io_V1beta1 = {
  name: ExposeType_Enmasse_Io_V1beta1;
  displayName: Scalars['String'];
  description: Scalars['String'];
};

export enum EndpointServiceType_Enmasse_Io_V1beta1 {
  Messaging = 'messaging',
  Mqtt = 'mqtt',
  Console = 'console'
}

export type EndpointSpec_Enmasse_Io_V1beta1 = {
  name: Scalars['String'];
  service: EndpointServiceType_Enmasse_Io_V1beta1;
  certificate?: Maybe<CertificateSpec_Enmasse_Io_V1beta1>;
  expose?: Maybe<ExposeSpec_Enmasse_Io_V1beta1>;
};

export type EndpointSpec_Enmasse_Io_V1beta1_Input = {
  name: Scalars['String'];
  service: EndpointServiceType_Enmasse_Io_V1beta1;
  certificate?: Maybe<CertificateSpec_Enmasse_Io_V1beta1_Input>;
  expose?: Maybe<ExposeSpec_Enmasse_Io_V1beta1_Input>;
};

export type EndpointStatus_Enmasse_Io_V1beta1 = {
  name: Scalars['String'];
  certificate?: Maybe<Scalars['String']>;
  serviceHost: Scalars['String'];
  servicePorts: Array<Port_Enmasse_Io_V1beta1>;
  externalHost?: Maybe<Scalars['String']>;
  externalPorts?: Maybe<Array<Port_Enmasse_Io_V1beta1>>;
};

export type ExposeSpec_Enmasse_Io_V1beta1 = {
  type: ExposeType_Enmasse_Io_V1beta1;
  routeHost?: Maybe<Scalars['String']>;
  routeServicePort?: Maybe<RouteServicePort_Enmasse_Io_V1beta1>;
  routeTlsTermination?: Maybe<RouteTlsTermination_Enmasse_Io_V1beta1>;
  loadBalancerPorts?: Maybe<Array<Scalars['String']>>;
  loadBalancerSourceRanges?: Maybe<Array<Scalars['String']>>;
};

export type ExposeSpec_Enmasse_Io_V1beta1_Input = {
  type: Scalars['String'];
  routeHost?: Maybe<Scalars['String']>;
  routeServicePort?: Maybe<RouteServicePort_Enmasse_Io_V1beta1>;
  routeTlsTermination?: Maybe<RouteTlsTermination_Enmasse_Io_V1beta1>;
  loadBalancerPorts?: Maybe<Array<Scalars['String']>>;
  loadBalancerSourceRanges?: Maybe<Array<Scalars['String']>>;
};

export enum ExposeType_Enmasse_Io_V1beta1 {
  Route = 'route',
  Loadbalancer = 'loadbalancer'
}

export enum IotCredentials {
  Psk = 'psk',
  HashedPassword = 'hashed_password',
  X509 = 'x509'
}

export type IotEndpoint = {
  name: IotEndpointName;
  url?: Maybe<Scalars['String']>;
  host: Scalars['String'];
  port: Scalars['Int'];
  tls?: Maybe<Scalars['Boolean']>;
};

export enum IotEndpointName {
  HttpAdapter = 'HttpAdapter',
  MqttAdapter = 'MqttAdapter',
  AmqpAdapter = 'AmqpAdapter',
  CoapAdapter = 'CoapAdapter',
  DeviceRegistrationManagement = 'DeviceRegistrationManagement',
  DeviceCredentialManagement = 'DeviceCredentialManagement'
}

export type IoTProject_Iot_Enmasse_Io_V1alpha1 = {
  metadata: ObjectMeta_V1;
  kind: Scalars['String'];
  enabled: Scalars['Boolean'];
  spec: IotProjectSpec_Iot_Enmasse_Io_V1alpha1;
  status: IoTProjectStatus_Iot_Enmasse_Io_V1alpha1;
  messagingEndpoints: Array<MessagingEndpoint_Enmasse_Io_V1>;
  devices?: Maybe<DevicesQueryResult_Consoleapi_Iot_Enmasse_Io_V1alpha1>;
  endpoints?: Maybe<Array<Maybe<IotEndpoint>>>;
};


export type IoTProject_Iot_Enmasse_Io_V1alpha1DevicesArgs = {
  iotproject: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};

export type IotProject_Iot_Enmasse_Io_V1alpha1_Input = {
  metadata?: Maybe<ObjectMeta_V1_Input>;
  enabled: Scalars['Boolean'];
};

export type IotProjectSpec_Iot_Enmasse_Io_V1alpha1 = {
  tenantId: Scalars['String'];
  addresses: AddressesConfig_Iot_Enmasse_Io_V1alpha1;
  configuration: Scalars['String'];
};

export type IoTProjectStatus_Iot_Enmasse_Io_V1alpha1 = {
  phase: ProjectPhaseType;
  phaseReason?: Maybe<Scalars['String']>;
};

export type KeyValue = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Link_Consoleapi_Enmasse_Io_V1beta1 = {
  metadata: ObjectMeta_V1;
  spec: LinkSpec_Consoleapi_Enmasse_Io_V1beta1;
  metrics: Array<Metric_Consoleapi_Enmasse_Io_V1beta1>;
};

export type LinkQueryResult_Consoleapi_Enmasse_Io_V1beta1 = {
  total: Scalars['Int'];
  links: Array<Link_Consoleapi_Enmasse_Io_V1beta1>;
};

export enum LinkRole {
  Sender = 'sender',
  Receiver = 'receiver'
}

export type LinkSpec_Consoleapi_Enmasse_Io_V1beta1 = {
  connection: Connection_Consoleapi_Enmasse_Io_V1beta1;
  address: Scalars['String'];
  role: LinkRole;
  metrics: Array<Metric_Consoleapi_Enmasse_Io_V1beta1>;
};

export type MessagingEndpoint_Enmasse_Io_V1 = {
  metadata: ObjectMeta_V1;
  spec: MessagingEndpointSpec_Enmasse_Io_V1;
  status?: Maybe<MessagingEndpointStatus_Enmasse_Io_V1>;
};

export enum MessagingEndpointPhase_Enmasse_Io_V1 {
  Configuring = 'Configuring',
  Active = 'Active',
  Terminating = 'Terminating'
}

export type MessagingEndpointPort_Enmasse_Io_V1 = {
  name: Scalars['String'];
  protocol: MessagingEndpointProtocol_Enmasse_Io_V1;
  port: Scalars['Int'];
};

export enum MessagingEndpointProtocol_Enmasse_Io_V1 {
  Amqp = 'AMQP',
  Amqps = 'AMQPS',
  AmqpWs = 'AMQP_WS',
  AmqpWss = 'AMQP_WSS'
}

export type MessagingEndpointQueryResult_Consoleapi_Enmasse_Io_V1beta1 = {
  total: Scalars['Int'];
  messagingEndpoints: Array<MessagingEndpoint_Enmasse_Io_V1>;
};

export type MessagingEndpointSpec_Enmasse_Io_V1 = {
  protocols: Array<MessagingEndpointProtocol_Enmasse_Io_V1>;
};

export type MessagingEndpointStatus_Enmasse_Io_V1 = {
  phase: MessagingEndpointPhase_Enmasse_Io_V1;
  type: MessagingEndpointType_Enmasse_Io_V1;
  message?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  ports: Array<MessagingEndpointPort_Enmasse_Io_V1>;
  internalPorts: Array<MessagingEndpointPort_Enmasse_Io_V1>;
};

export enum MessagingEndpointType_Enmasse_Io_V1 {
  Cluster = 'Cluster',
  NodePort = 'NodePort',
  LoadBalancer = 'LoadBalancer',
  Route = 'Route',
  Ingress = 'Ingress'
}

export type Metric_Consoleapi_Enmasse_Io_V1beta1 = {
  name: Scalars['String'];
  type: MetricType;
  value: Scalars['Float'];
  units: Scalars['String'];
};

export enum MetricType {
  Gauge = 'gauge',
  Counter = 'counter'
}

export type Mutation = {
  createAddressSpace: ObjectMeta_V1;
  patchAddressSpace?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  deleteAddressSpace?: Maybe<Scalars['Boolean']>;
  /** deletes addressspace(s) */
  deleteAddressSpaces?: Maybe<Scalars['Boolean']>;
  createAddress: ObjectMeta_V1;
  patchAddress?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  deleteAddress?: Maybe<Scalars['Boolean']>;
  /** deletes addresss(es) */
  deleteAddresses?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  purgeAddress?: Maybe<Scalars['Boolean']>;
  /** purges address(es) */
  purgeAddresses?: Maybe<Scalars['Boolean']>;
  closeConnections?: Maybe<Scalars['Boolean']>;
  createIotDevice?: Maybe<Device>;
  deleteIotDevices?: Maybe<Scalars['Boolean']>;
  updateIotDevice?: Maybe<Device>;
  setCredentialsForDevice?: Maybe<Scalars['Boolean']>;
  deleteCredentialsForDevice?: Maybe<Scalars['Boolean']>;
  createIotProject: ObjectMeta_V1;
  patchIotProject?: Maybe<Scalars['Boolean']>;
  deleteIotProjects?: Maybe<Scalars['Boolean']>;
  toggleIoTProjectsStatus?: Maybe<Scalars['Boolean']>;
  toggleIoTDevicesStatus?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAddressSpaceArgs = {
  input: AddressSpace_Enmasse_Io_V1beta1_Input;
};


export type MutationPatchAddressSpaceArgs = {
  input: ObjectMeta_V1_Input;
  jsonPatch: Scalars['String'];
  patchType: Scalars['String'];
};


export type MutationDeleteAddressSpaceArgs = {
  input: ObjectMeta_V1_Input;
};


export type MutationDeleteAddressSpacesArgs = {
  input: Array<ObjectMeta_V1_Input>;
};


export type MutationCreateAddressArgs = {
  input: Address_Enmasse_Io_V1beta1_Input;
  addressSpace?: Maybe<Scalars['String']>;
};


export type MutationPatchAddressArgs = {
  input: ObjectMeta_V1_Input;
  jsonPatch: Scalars['String'];
  patchType: Scalars['String'];
};


export type MutationDeleteAddressArgs = {
  input: ObjectMeta_V1_Input;
};


export type MutationDeleteAddressesArgs = {
  input: Array<ObjectMeta_V1_Input>;
};


export type MutationPurgeAddressArgs = {
  input: ObjectMeta_V1_Input;
};


export type MutationPurgeAddressesArgs = {
  input: Array<ObjectMeta_V1_Input>;
};


export type MutationCloseConnectionsArgs = {
  input: Array<ObjectMeta_V1_Input>;
};


export type MutationCreateIotDeviceArgs = {
  iotproject: ObjectMeta_V1_Input;
  device: Device_Iot_Console_Input;
};


export type MutationDeleteIotDevicesArgs = {
  iotproject: ObjectMeta_V1_Input;
  deviceIds: Array<Scalars['String']>;
};


export type MutationUpdateIotDeviceArgs = {
  iotproject: ObjectMeta_V1_Input;
  device: Device_Iot_Console_Input;
};


export type MutationSetCredentialsForDeviceArgs = {
  iotproject: ObjectMeta_V1_Input;
  deviceId: Scalars['String'];
  jsonData: Scalars['String'];
};


export type MutationDeleteCredentialsForDeviceArgs = {
  iotproject: ObjectMeta_V1_Input;
  deviceId: Scalars['String'];
};


export type MutationCreateIotProjectArgs = {
  input?: Maybe<IotProject_Iot_Enmasse_Io_V1alpha1_Input>;
};


export type MutationPatchIotProjectArgs = {
  input: ObjectMeta_V1_Input;
  jsonPatch: Scalars['String'];
  patchType: Scalars['String'];
};


export type MutationDeleteIotProjectsArgs = {
  input: Array<ObjectMeta_V1_Input>;
};


export type MutationToggleIoTProjectsStatusArgs = {
  input: Array<ObjectMeta_V1_Input>;
  status: Scalars['Boolean'];
};


export type MutationToggleIoTDevicesStatusArgs = {
  iotproject: ObjectMeta_V1_Input;
  devices: Array<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Namespace_V1 = {
  metadata: ObjectMeta_V1;
  status: NamespaceStatus_V1;
};

export type NamespaceStatus_V1 = {
  phase: Scalars['String'];
};

export type ObjectMeta_V1 = {
  annotations: Array<KeyValue>;
  name: Scalars['String'];
  namespace: Scalars['String'];
  resourceVersion: Scalars['String'];
  creationTimestamp: Scalars['Date'];
  uid: Scalars['ID'];
};

export type ObjectMeta_V1_Input = {
  name?: Maybe<Scalars['String']>;
  namespace: Scalars['String'];
  resourceVersion?: Maybe<Scalars['String']>;
};

export type Port_Enmasse_Io_V1beta1 = {
  name: Scalars['String'];
  port: Scalars['Int'];
  roll: Scalars['Int'];
};

export type ProjectListQueryResult_Consoleapi_Iot_Enmasse_Io_V1alpha1 = {
  total: Scalars['Int'];
  objects: Array<ProjectListResult_Consoleapi_Iot_Enmasse_Io_V1alpha1>;
};

export type ProjectListResult_Consoleapi_Iot_Enmasse_Io_V1alpha1 = AddressSpace_Consoleapi_Enmasse_Io_V1beta1 | IoTProject_Iot_Enmasse_Io_V1alpha1;

export enum ProjectPhaseType {
  Active = 'Active',
  Configuring = 'Configuring',
  Terminating = 'Terminating',
  Failed = 'Failed'
}

export enum Protocol {
  Amqp = 'amqp',
  Amqps = 'amqps'
}

export type Query = {
  hello?: Maybe<Scalars['String']>;
  /** Returns the address spaces type defined by the system (DEPRECATED) */
  addressSpaceTypes: Array<AddressSpaceType>;
  /** Returns the address spaces type defined by the system optionally filtereing for a single address space type */
  addressSpaceTypes_v2: Array<AddressSpaceType_Consoleapi_Enmasse_Io_V1beta1>;
  /** Returns the address types defined by the system (DEPRECATED) */
  addressTypes: Array<AddressType>;
  /** Returns the address types defined by the system optionally filtereing for a single address space type */
  addressTypes_v2: Array<AddressType_Consoleapi_Enmasse_Io_V1beta1>;
  /** Returns the address spaces plans defined by the system optionally filtereing for a single address space type */
  addressSpacePlans: Array<AddressSpacePlan_Admin_Enmasse_Io_V1>;
  /**
   * Returns the address plans defined by the system optionally filtering those for
   * a matching address space plan and/or address type
   */
  addressPlans: Array<AddressPlan_Admin_Enmasse_Io_V1>;
  /** Returns the authenticationServices */
  authenticationServices: Array<AuthenticationService_Admin_Enmasse_Io_V1beta1>;
  /** Returns the addressSpaceSchema */
  addressSpaceSchema: Array<AddressSpaceSchema_Enmasse_Io_V1beta1>;
  /** Returns the addressSpaceSchema optionally filtering those for a matching address space type */
  addressSpaceSchema_v2: Array<AddressSpaceSchema_Enmasse_Io_V1beta1>;
  /** Returns the current logged on user */
  whoami: User_V1;
  /** Returns the namespaces visible to this user */
  namespaces: Array<Namespace_V1>;
  /** Returns the address spaces visible to this user,  optionally filtering */
  addressSpaces?: Maybe<AddressSpaceQueryResult_Consoleapi_Enmasse_Io_V1beta1>;
  /** Returns the addresses visible to this user,  optionally filtering */
  addresses?: Maybe<AddressQueryResult_Consoleapi_Enmasse_Io_V1beta1>;
  /** Returns the connections visible to this user,  optionally filtering */
  connections?: Maybe<ConnectionQueryResult_Consoleapi_Enmasse_Io_V1beta1>;
  /**
   * Returns the messaging certificate chain for the address space identifed by
   * input, PEM format, suitable to be offered as a download to the user
   */
  messagingCertificateChain: Scalars['String'];
  /** Returns the command-line that, if executed, would create the given address space */
  addressSpaceCommand: Scalars['String'];
  /** Returns the command-line command, if executed, would create the given address */
  addressCommand: Scalars['String'];
  /** Returns the messaging endpoints for the given address space */
  messagingEndpoints?: Maybe<MessagingEndpointQueryResult_Consoleapi_Enmasse_Io_V1beta1>;
  /** Returns the messaging projects and iot tenants visible to this user. */
  allProjects: ProjectListQueryResult_Consoleapi_Iot_Enmasse_Io_V1alpha1;
  /** Returns the devices in the given iot project visible to this user, optionally filtering */
  devices?: Maybe<DevicesQueryResult_Consoleapi_Iot_Enmasse_Io_V1alpha1>;
  /** Returns the credentials for the given device */
  credentials: CredentialsQueryResult_Consoleapi_Iot_Enmasse_Io_V1alpha1;
  /** Returns the command-line that, if executed, would create the given iotproject */
  iotProjectCommand: Scalars['String'];
};


export type QueryAddressTypes_V2Args = {
  addressSpaceType?: Maybe<AddressSpaceType>;
};


export type QueryAddressSpacePlansArgs = {
  addressSpaceType?: Maybe<AddressSpaceType>;
};


export type QueryAddressPlansArgs = {
  addressSpacePlan?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};


export type QueryAddressSpaceSchema_V2Args = {
  addressSpaceType?: Maybe<AddressSpaceType>;
};


export type QueryAddressSpacesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryConnectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryMessagingCertificateChainArgs = {
  input: ObjectMeta_V1_Input;
};


export type QueryAddressSpaceCommandArgs = {
  input: AddressSpace_Enmasse_Io_V1beta1_Input;
};


export type QueryAddressCommandArgs = {
  input: Address_Enmasse_Io_V1beta1_Input;
  addressSpace?: Maybe<Scalars['String']>;
};


export type QueryMessagingEndpointsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryAllProjectsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryDevicesArgs = {
  iotproject: ObjectMeta_V1_Input;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryCredentialsArgs = {
  filter?: Maybe<Scalars['String']>;
  iotproject: ObjectMeta_V1_Input;
  deviceId: Scalars['String'];
};


export type QueryIotProjectCommandArgs = {
  input: IotProject_Iot_Enmasse_Io_V1alpha1_Input;
};

export enum RouteServicePort_Enmasse_Io_V1beta1 {
  Amqps = 'amqps',
  Https = 'https',
  SecureMqtt = 'secure_mqtt'
}

export type RouteServicePortDescription_Enmasse_Io_V1beta1 = {
  name: RouteServicePort_Enmasse_Io_V1beta1;
  displayName: Scalars['String'];
  routeTlsTerminations: Array<RouteTlsTermination_Enmasse_Io_V1beta1>;
};

export enum RouteTlsTermination_Enmasse_Io_V1beta1 {
  Passthrough = 'passthrough',
  Reencrypt = 'reencrypt'
}

export type User_V1 = {
  metadata: ObjectMeta_V1;
  identities: Array<Scalars['String']>;
  groups: Array<Scalars['String']>;
  fullName: Scalars['String'];
};

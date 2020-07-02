import React from "react";
import { Grid, GridItem } from "@patternfly/react-core";
import {
  GeneralInfo,
  DeviceRegistationManagement,
  AccessCredentials,
  IIoTMessagingObject
} from "modules/iot-project-detail/components";
import { action } from "@storybook/addon-actions";
import { IAdapterConfig, IAdapter } from "components/AdapterList";
import { Protocols } from "constant";
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { RETURN_IOT_PROJECTS } from "graphql-module/queries/iot_project";
import { IIoTProjectsResponse } from "schema/iot_project";

export default function IoTProjectDetailInfoPage() {
  const { projectname } = useParams();

  const queryResolver = `
  iotProjects {
    metadata{
      namespace
    }
    spec {
      downstreamStrategy {
        ... on ManagedDownstreamStrategy_iot_enmasse_io_v1alpha1 {
          addressSpace {
            name
          }
          addresses {
            Telemetry {
              name
            }
            Event {
              name
            }
            Command {
              name
            }
          }
        }
      }
    }
    status {
      phase
      phaseReason
      tenantName
      downstreamEndpoint {
        host
        port
        credentials {
          username
          password
        }
        tls
        certificate
      }
    }
    endpoints {
      name
      url
      host
    }
  }
`;

  const { data } = useQuery<IIoTProjectsResponse>(
    RETURN_IOT_PROJECTS({ projectname }, queryResolver)
  );

  console.log(data);

  const {
    metadata: { namespace },
    spec: {
      downstreamStrategy: {
        addressSpace: { name: addressSpace },
        addresses: {
          Telemetry: { name: telemetryAddress },
          Event: { name: eventAddress },
          Command: commandAddresses
        }
      }
    },
    status: {
      downstreamEndpoint: {
        credentials: { username, password }
      }
    }
  } = data?.allProjects?.iotProjects[0] || {
    spec: {
      downstreamStrategy: {
        addressSpace: {
          name: ""
        },
        addresses: {
          Telemetry: {
            name: ""
          },
          Event: {
            name: ""
          },
          Command: [{ name: "" }]
        }
      }
    },
    metadata: {
      namespace: ""
    },
    status: {
      downstreamEndpoint: {
        host: "",
        port: 0,
        credentials: {
          username: "",
          password: ""
        },
        tls: false,
        certificate: ""
      }
    }
  };

  const messaging: IIoTMessagingObject = {
    url: "https://http.bosch-iot-hub.com",
    username,
    password,
    addressSpace,
    eventAddress,
    telemetryAddress,
    commandAddresses: []
  };

  const httpAdapter: IAdapterConfig = {
    url: "https://http.bosch-iot-hub.com"
  };
  const mqttAdapter: IAdapterConfig = {
    tlsEnabled: true,
    host: "mange.bosh-iot-hub.com",
    port: 8883
  };
  const amqpAdapter: IAdapterConfig = {
    url: "https://http.bosch-iot-hub.com"
  };
  const coapAdapter: IAdapterConfig = {
    url: "https://http.bosch-iot-hub.com"
  };
  const adapters: IAdapter[] = [
    { type: Protocols.HTTP, value: httpAdapter },
    { type: Protocols.MQTT, value: mqttAdapter },
    { type: Protocols.AMQP, value: amqpAdapter },
    { type: Protocols.COAP, value: coapAdapter }
  ];
  return (
    <Grid>
      <GridItem span={6}>
        <GeneralInfo
          addressSpace={addressSpace}
          eventAddress={eventAddress}
          telemetryAddress={telemetryAddress}
          commandAddresses={commandAddresses.map((as: any) => as.name)}
          maxConnection={50000}
          dataVolume={50000}
          startDate={"start Date"}
          endDate={"end Date"}
          namespace={namespace}
        />
        <DeviceRegistationManagement
          // To be replaced with the OAuth token
          token={"username"}
          endpoiuntUrl={"https://http.bosch-iot-hub.com"}
        />
      </GridItem>
      <GridItem span={6}>
        <AccessCredentials
          tenantId={"FNDSKB5GSD58EGWAW6663RWfsaf8"}
          messaging={messaging}
          adapters={adapters}
          onDownloadCertificate={action("onDownload triggered")}
        />
      </GridItem>
    </Grid>
  );
}

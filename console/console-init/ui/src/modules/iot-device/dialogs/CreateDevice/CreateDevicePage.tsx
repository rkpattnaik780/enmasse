/*
 * Copyright 2020, EnMasse authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */

import React, { useState, useMemo } from "react";
import {
  Wizard,
  WizardFooter,
  WizardContextConsumer,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  PageSection,
  Page,
  PageSectionVariants,
  Divider,
  Title,
  Flex,
  FlexItem,
  GridItem,
  Grid
} from "@patternfly/react-core";
import { DeviceInformation } from "./DeviceInformation";
import { ConnectionType } from "modules/iot-device/components/ConnectionTypeStep";
import {
  AddGateways,
  AddCredential,
  AddGatewayGroupMembership,
  ICredential,
  IMetadataProps,
  getInitialMetadataState
} from "modules/iot-device/components";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useBreadcrumb } from "use-patternfly";
import { SwitchWithToggle } from "components";
import {
  ReviewDeviceContainer,
  IDeviceProp
} from "modules/iot-device/containers";
import { StyleSheet, css } from "aphrodite";
import { useMutationQuery } from "hooks";
import { CREATE_IOT_DEVICE } from "graphql-module";
import { OperationType } from "constant";
import {
  getCredentialsFieldsInitialState,
  serializeCredentials,
  serializeMetaData
} from "modules/iot-device/utils";
import { convertMetadataOptionsToJson, convertObjectIntoJson } from "utils";

const getInitialDeviceForm = () => {
  const device: IDeviceProp = {
    connectionType: "directly",
    deviceInformation: {},
    gateways: {}
  };
  return device;
};

export default function CreateDevicePage() {
  const history = useHistory();
  const [connectionType, setConnectionType] = useState<string>("directly");
  const [deviceIdInput, setDeviceIdInput] = useState<string>("");
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [metadataList, setMetadataList] = useState<IMetadataProps[]>(
    getInitialMetadataState
  );
  const [gatewayDevices, setGatewayDevices] = useState<string[]>([]);
  const [gatewayGroups, setGatewayGroups] = useState<string[]>([]);
  const [memberOf, setMemberOf] = useState<string[]>([]);
  const [credentials, setCredentials] = useState<ICredential[]>([
    getCredentialsFieldsInitialState()
  ]);
  const { projectname, namespace } = useParams();

  const styles = StyleSheet.create({
    lighter_text: {
      fontWeight: "lighter"
    }
  });

  const deviceListRouteLink = `/iot-projects/${namespace}/${projectname}/devices`;
  const breadcrumb = useMemo(
    () => (
      <Breadcrumb>
        <BreadcrumbItem>
          <Link id="home-link" to={"/"}>
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isActive={true}>{projectname}</BreadcrumbItem>
      </Breadcrumb>
    ),
    [projectname]
  );

  const onDeviceSaveSuccess = () => {
    resetWizardState();
    history.push(deviceListRouteLink);
  };

  const resetWizardState = () => {
    setDeviceIdInput("");
    setIsEnabled(false);
    setGatewayDevices([]);
    setGatewayGroups([]);
    setMemberOf([]);
    setCredentials([getCredentialsFieldsInitialState()]);
    setMetadataList(getInitialMetadataState);
  };

  const [setCreateDeviceQueryVariables] = useMutationQuery(
    CREATE_IOT_DEVICE,
    undefined,
    undefined,
    onDeviceSaveSuccess
  );

  useBreadcrumb(breadcrumb);

  const getGateways = (gateways: string[]) => {
    setGatewayDevices(gateways);
  };

  const getGatewayGroups = (groups: string[]) => {
    setGatewayGroups(groups);
  };

  const onCloseDialog = () => {
    history.push(deviceListRouteLink);
  };

  const addGateway = {
    name: "Add gateways",
    component: (
      <>
        <Title size="2xl" headingLevel="h1">
          Choose existing gateways or gateway groups for connection
        </Title>
        <br />
        <AddGateways
          gatewayDevices={gatewayDevices}
          gatewayGroups={gatewayGroups}
          returnGatewayDevices={getGateways}
          returnGatewayGroups={getGatewayGroups}
        />
      </>
    )
  };

  const AddGatewayGroupMembershipWrapper = () => (
    <>
      <Title size="2xl" headingLevel="h1">
        Assign to gateway groups{" "}
        <small className={css(styles.lighter_text)}>(Optional)</small>
      </Title>
      <br />
      <AddGatewayGroupMembership
        id="create-device-add-gateway-group"
        gatewayGroups={memberOf}
        returnGatewayGroups={setMemberOf}
      />
    </>
  );

  const assignGroups = {
    name: "Gateway groups",
    component: <AddGatewayGroupMembershipWrapper />
  };

  const addCredentials = {
    name: "Add credentials",
    component: (
      <Grid hasGutter>
        <GridItem span={8}>
          <Title size="2xl" headingLevel="h1">
            Add credentials to this new device{" "}
          </Title>
          <br />
        </GridItem>
        <GridItem span={8}>
          <AddCredential
            credentials={credentials}
            setCredentialList={setCredentials}
            operation={OperationType.EDIT}
          />
        </GridItem>
      </Grid>
    )
  };

  const serializeExt = (ext: any[]) => {
    let serializedExt: any = {};

    Array.isArray(ext) &&
      ext.forEach((ele: any) => {
        if (ele.key.trim() !== "") {
          if (ele.type === "String") {
            (serializedExt[ele.key] as any) = ele.value;
          }
          if (ele.type === "Number") {
            (serializedExt[ele.key] as any) = Number(ele.value);
          }
          if (ele.type === "Boolean") {
            (serializedExt[ele.key] as any) = ele.value === "true";
          }
        }
      });

    return serializedExt;
  };

  const credentialsToCredentialView = (credential: any[]) => {
    return credential.map(
      ({ type, ext, enabled, secrets, "auth-id": authId }) => {
        return {
          type,
          ext: serializeExt(ext),
          enabled,
          secrets,
          "auth-id": authId
        };
      }
    );
  };

  const reviewForm = {
    name: "Review",
    component: (
      <ReviewDeviceContainer
        device={{
          deviceInformation: {
            deviceId: deviceIdInput,
            status: isEnabled,
            metadata: metadataList,
            ext: JSON.parse(serializeMetaData(metadataList))
          },
          connectionType,
          gateways: {
            gatewayGroups,
            gateways: gatewayDevices
          },
          memberOf,
          ...(connectionType == "directly" && {
            credentials: credentialsToCredentialView(credentials)
          })
        }}
        title={"Verify that the following information is correct before done"}
      />
    )
  };

  const onChangeConnection = (_: boolean, event: any) => {
    const connectionType = event.target.value;
    if (connectionType) {
      if (connectionType === "via-device")
        setCredentials([getCredentialsFieldsInitialState()]);
      else {
        setGatewayDevices([]);
        setGatewayGroups([]);
      }
      setConnectionType(connectionType);
    }
  };

  const handleSave = async () => {
    // Add query to add device
    const variable = {
      iotproject: { name: projectname, namespace },
      device: {
        deviceId: deviceIdInput,
        registration: {
          enabled: isEnabled,
          ext: serializeMetaData(metadataList),
          via: gatewayDevices,
          viaGroups: gatewayGroups,
          memberOf
        },
        ...(connectionType === "directly" && {
          credentials: serializeCredentials(credentials)
        })
      }
    };
    setCreateDeviceQueryVariables(variable);
  };

  const steps = [
    {
      name: "Device information",
      component: (
        <DeviceInformation
          deviceId={deviceIdInput}
          returnDeviceId={setDeviceIdInput}
          deviceStatus={isEnabled}
          returnDeviceStatus={setIsEnabled}
          metadataList={metadataList}
          returnMetadataList={setMetadataList}
        />
      )
    },
    {
      name: "Connection Type",
      component: (
        <ConnectionType
          connectionType={connectionType}
          onChangeConnection={onChangeConnection}
        />
      )
    }
  ];

  if (connectionType) {
    if (connectionType === "directly") {
      steps.push(addCredentials);
    } else {
      steps.push(addGateway);
    }
    steps.push(assignGroups);
    steps.push(reviewForm);
  }

  const handleNextIsEnabled = () => {
    return true;
  };

  const CustomFooter = (
    <WizardFooter>
      <WizardContextConsumer>
        {({ activeStep, onNext, onBack, onClose }) => {
          if (
            activeStep.name === "Device information" ||
            activeStep.name === "Connection Type"
          ) {
            return (
              <>
                <Button
                  id="create-device-page-next-button"
                  variant="primary"
                  type="submit"
                  onClick={onNext}
                  className={
                    activeStep.name === "Connection Type" && !connectionType
                      ? "pf-m-disabled"
                      : ""
                  }
                >
                  Next
                </Button>
                <Button
                  id="create-device-page-back-button"
                  variant="secondary"
                  onClick={onBack}
                  className={
                    activeStep.name === "Device information"
                      ? "pf-m-disabled"
                      : ""
                  }
                >
                  Back
                </Button>
                <Button
                  id="create-device-page-cancel-button"
                  variant="link"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </>
            );
          }
          if (activeStep.name !== "Review") {
            return (
              <>
                <Button
                  id="create-device-page-next-button"
                  variant="primary"
                  type="submit"
                  onClick={onNext}
                  className={handleNextIsEnabled() ? "" : "pf-m-disabled"}
                >
                  Next
                </Button>
                <Button
                  id="create-device-page-back-button"
                  variant="secondary"
                  onClick={onBack}
                >
                  Back
                </Button>
                <Button
                  id="create-device-page-cancel-button"
                  variant="link"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </>
            );
          }

          return (
            <>
              <Button
                id="create-device-page-finish-button"
                variant="primary"
                onClick={handleSave}
                type="submit"
              >
                Finish
              </Button>
              <Button
                id="create-device-page-back-button"
                onClick={onBack}
                variant="secondary"
              >
                Back
              </Button>
              <Button
                id="create-device-page-cancel-button"
                variant="link"
                onClick={onClose}
              >
                Cancel
              </Button>
            </>
          );
        }}
      </WizardContextConsumer>
    </WizardFooter>
  );

  return (
    <Page>
      <PageSection variant={PageSectionVariants.light}>
        <Flex>
          <FlexItem>
            <Title size={"2xl"} headingLevel="h1">
              Add a device
            </Title>
          </FlexItem>
          <FlexItem align={{ default: "alignRight" }}>
            <SwitchWithToggle
              id={"create-device-page-view-json-switchtoggle"}
              labelOff={"View JSON Format"}
              onChange={() => {
                console.log("View in JSON");
              }}
              label={"View Form Format"}
            />
          </FlexItem>
        </Flex>
        <br />
        <Divider />
      </PageSection>
      <Wizard
        id="create-device-page-wizard"
        onClose={onCloseDialog}
        onSave={handleSave}
        footer={CustomFooter}
        steps={steps}
      />
    </Page>
  );
}

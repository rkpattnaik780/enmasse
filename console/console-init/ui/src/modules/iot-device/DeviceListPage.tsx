/*
 * Copyright 2020, EnMasse authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */

import React, { useState } from "react";
import { useDocumentTitle } from "use-patternfly";
import {
  Grid,
  GridItem,
  Card,
  CardBody,
  DropdownItem
} from "@patternfly/react-core";
import { ISortBy } from "@patternfly/react-table";
import {
  DeviceFilter,
  DeviceListAlert,
  DeviceListFooterToolbar,
  DeviceListToolbar,
  IDevice,
  IDeviceFilter
} from "modules/iot-device/components";
import {
  getHeaderForDialog,
  getDetailForDialog,
  DialogTypes
} from "modules/iot-device/utils";
import { DeviceListContainer } from "modules/iot-device/containers";
import { compareObject } from "utils";
import { getInitialFilter } from "modules/iot-device/utils";
import { useStoreContext, MODAL_TYPES, types } from "context-state-reducer";

export default function DeviceListPage() {
  useDocumentTitle("Device List");

  const [totalDevices, setTotalDevices] = useState<number>();
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [perPage, setPerPage] = useState<number>(10);
  const [selectedDevices, setSelectedDevices] = useState<IDevice[]>([]);
  const [filter, setFilter] = useState<IDeviceFilter>(getInitialFilter());
  const [appliedFilter, setAppliedFilter] = useState<IDeviceFilter>(
    getInitialFilter()
  );

  const { dispatch } = useStoreContext();

  const onSelectDevice = (
    data: IDevice,
    isSelected: boolean,
    isAllSelected?: boolean
  ) => {
    if (isSelected === true && selectedDevices.indexOf(data) === -1) {
      setSelectedDevices(prevState => [...prevState, data]);
    } else if (isSelected === false) {
      setSelectedDevices(prevState =>
        prevState.filter(
          device =>
            !compareObject(
              {
                id: device.deviceId
              },
              {
                id: data.deviceId
              }
            )
        )
      );
    }
    if (isAllSelected) {
      setIsAllSelected(true);
    }
  };

  const [sortDropDownValue, setSortDropdownValue] = useState<ISortBy>();

  const onSelectAllDevices = (isSelected: boolean) => {
    if (isSelected === true) {
      setIsAllSelected(true);
    } else if (isSelected === false) {
      setIsAllSelected(false);
      setSelectedDevices([]);
    }
  };

  const runFilter = () => {
    setAppliedFilter(filter);
  };

  const selectAllDevices = (devices: IDevice[]) => {
    setSelectedDevices(devices);
  };

  const onConfirmDeleteSelectedDevices = () => {
    // TODO: TO BE DONE AFTER BACKEND IS READY
  };

  const onConfirmEnableSelectedDevices = () => {
    // TODO: TO BE DONE AFTER BACKEND IS READY
  };

  const onConfirmDisableSelectedDevices = () => {
    // TODO: TO BE DONE AFTER BACKEND IS READY
  };

  const onSelectEnableDevices = () => {
    dispatch({
      type: types.SHOW_MODAL,
      modalType: MODAL_TYPES.UPDATE_DEVICE_STATUS,
      modalProps: {
        onConfirm: onConfirmEnableSelectedDevices,
        selectedItems: selectedDevices.map(device => device.deviceId),
        option: "Enable",
        data: selectedDevices,
        detail: getDetailForDialog(selectedDevices, DialogTypes.ENABLE),
        header: getHeaderForDialog(selectedDevices, DialogTypes.ENABLE)
      }
    });
  };

  const onSelectDisableDevice = () => {
    dispatch({
      type: types.SHOW_MODAL,
      modalType: MODAL_TYPES.UPDATE_DEVICE_STATUS,
      modalProps: {
        onConfirm: onConfirmDisableSelectedDevices,
        selectedItems: selectedDevices.map(device => device.deviceId),
        option: "Disable",
        data: selectedDevices,
        detail: getDetailForDialog(selectedDevices, DialogTypes.DISABLE),
        header: getHeaderForDialog(selectedDevices, DialogTypes.DISABLE)
      }
    });
  };

  const onSelectDeleteDevice = () => {
    dispatch({
      type: types.SHOW_MODAL,
      modalType: MODAL_TYPES.DELETE_IOT_DEVICE,
      modalProps: {
        onConfirm: onConfirmDeleteSelectedDevices,
        selectedItems: selectedDevices.map(device => device.deviceId),
        option: "Delete",
        data: selectedDevices,
        detail: getDetailForDialog(selectedDevices, DialogTypes.DELETE),
        header: getHeaderForDialog(selectedDevices, DialogTypes.DELETE)
      }
    });
  };

  const isDeleteDevicesOptionDisabled = () => {
    if (selectedDevices.length > 0) {
      return false;
    }
    return true;
  };

  const isEnableDevicesOptionDisabled = () => {
    return selectedDevices.every((device: IDevice) => {
      return device?.enabled === true;
    });
  };

  const isDisableDevicesOptionDisabled = () => {
    return selectedDevices.every((device: IDevice) => {
      return device?.enabled === false;
    });
  };

  const kebabItems: React.ReactNode[] = [
    <DropdownItem
      onClick={onSelectEnableDevices}
      isDisabled={isEnableDevicesOptionDisabled()}
    >
      Enable
    </DropdownItem>,
    <DropdownItem
      onClick={onSelectDisableDevice}
      isDisabled={isDisableDevicesOptionDisabled()}
    >
      Disable
    </DropdownItem>,
    <DropdownItem
      onClick={onSelectDeleteDevice}
      isDisabled={isDeleteDevicesOptionDisabled()}
    >
      Delete
    </DropdownItem>
  ];

  const resetFilter = () => {
    setFilter(getInitialFilter());
    setAppliedFilter(getInitialFilter());
  };

  const handleInputDeviceInfo = () => {
    // TODO: After create device is ready
  };

  const handleJSONUpload = () => {
    // TODO: After create device is ready
  };

  // TODO: the fetch devices needs to be moved to devicelistpage for the empty
  // device list to be shown properly.
  // if (totalDevices === 0 && compareObject(appliedFilter, getInitialFilter())) {
  //   return (
  //     <EmptyDeviceList
  //       handleInputDeviceInfo={handleInputDeviceInfo}
  //       handleJSONUpload={handleJSONUpload}
  //     />
  //   );
  // }

  return (
    <Grid gutter="md">
      <GridItem span={3}>
        <Card>
          <CardBody>
            <DeviceFilter
              filter={filter}
              setFilter={setFilter}
              runFilter={runFilter}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem span={9}>
        <DeviceListAlert
          visible={true}
          variant={"info"}
          isInline={true}
          title={"Run filter to view your devices"}
          description={`You have a total of ${totalDevices} devices`}
        />
        <br />
        <DeviceListToolbar
          itemCount={totalDevices || 0}
          perPage={perPage}
          page={0}
          kebabItems={kebabItems}
          onSetPage={() => {}}
          onPerPageSelect={() => {}}
          handleInputDeviceInfo={handleInputDeviceInfo}
          handleJSONUpload={handleJSONUpload}
          isOpen={isAllSelected}
          isChecked={isAllSelected}
          items={[]}
          onChange={() => {}}
          onSelectAllDevices={onSelectAllDevices}
        />
        <DeviceListContainer
          setTotalDevices={setTotalDevices}
          selectedDevices={selectedDevices}
          onSelectDevice={onSelectDevice}
          selectAllDevices={selectAllDevices}
          areAllDevicesSelected={isAllSelected}
          sortValue={sortDropDownValue}
          setSortValue={setSortDropdownValue}
          appliedFilter={appliedFilter}
          resetFilter={resetFilter}
        />
        <br />
        <DeviceListFooterToolbar
          itemCount={totalDevices || 0}
          perPage={perPage}
          page={0}
        />
      </GridItem>
    </Grid>
  );
}
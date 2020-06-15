/*
 * Copyright 2020, EnMasse authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */

import React from "react";
import {
  Split,
  SplitItem,
  Title,
  Flex,
  FlexItem,
  DropdownItem,
  DropdownPosition,
  DropdownSeparator
} from "@patternfly/react-core";
import { css, StyleSheet } from "@patternfly/react-styles";
import { FormatDistance } from "use-patternfly";
import { DropdownWithKebabToggle, SwitchWithToggle } from "components";
import { useStoreContext, types } from "context-state-reducer";
import { DeviceActionType } from "modules/iot-device-detail/utils";

interface IDeviceDetailHeaderProps {
  deviceName?: string;
  addedDate: string;
  lastTimeSeen: string;
  deviceStatus?: boolean;
  onChange: (enabled: boolean) => void;
  onDelete: () => void;
  onClone: () => void;
}

const styles = StyleSheet.create({
  flex_left_border: {
    paddingLeft: "1em",
    borderLeft: "0.05em solid",
    borderRightColor: "--pf-chart-global--Fill--Color--200"
  },
  kebab_toggle_margin: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 15
  },
  namespace_info_margin: {
    marginTop: 16,
    marginBottom: 24
  },
  no_bottom_padding: {
    paddingBottom: 0
  }
});

const DeviceDetailHeader: React.FunctionComponent<IDeviceDetailHeaderProps> = ({
  deviceName,
  addedDate,
  lastTimeSeen,
  onDelete,
  onChange,
  onClone,
  deviceStatus
}) => {
  const { dispatch } = useStoreContext();

  const onSelectEditMetadata = () => {
    dispatch({
      type: types.SET_DEVICE_ACTION_TYPE,
      payload: { actionType: DeviceActionType.EDIT_METADATA }
    });
  };

  const onSelectEditDeviceInJson = () => {
    dispatch({
      type: types.SET_DEVICE_ACTION_TYPE,
      payload: { actionType: DeviceActionType.EDIT_DEVICE_IN_JSON }
    });
  };

  const DeviceDetailLayout = () => (
    <>
      <SplitItem>
        <Split gutter="md">
          <SplitItem>
            <Title headingLevel="h1" size="4xl" id="title-device-name">
              {deviceName}
            </Title>
          </SplitItem>
        </Split>
        <Flex className={css(styles.namespace_info_margin)}>
          <FlexItem id="flex-item-device-added-date">
            Added Date :
            <b>
              <FormatDistance date={addedDate} />
            </b>
          </FlexItem>
          <FlexItem
            id="flex-item-device-last-seen-time"
            className={css(styles.flex_left_border)}
          >
            Last time seen :{" "}
            <b>
              <FormatDistance date={lastTimeSeen} />
            </b>
          </FlexItem>
        </Flex>
      </SplitItem>
    </>
  );

  const KebabOptionsLayout = () => {
    const dropdownItems: React.ReactNode[] = [
      <DropdownItem
        id="device-detail-header-kebab-option-edit-metadata"
        key="edit-metadata"
        aria-label="edit metadata"
        onClick={onSelectEditMetadata}
      >
        Edit metadata
      </DropdownItem>,
      <DropdownItem
        id="device-detail-header-kebab-option-edit-json"
        key="edit-in-json"
        aria-label="edit device in json"
        onClick={onSelectEditDeviceInJson}
      >
        Edit device in JSON
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem
        id="device-detail-header-kebab-option-delete"
        key="delete-device"
        aria-label="delete device"
        onClick={onDelete}
      >
        Delete Device
      </DropdownItem>,
      <DropdownItem
        id="device-detail-header-kebab-option-clone"
        key="clone-device"
        aria-label="clone"
        onClick={onClone}
      >
        Clone Device
      </DropdownItem>
    ];
    return (
      <DropdownWithKebabToggle
        id="device-detail-header-kebab-dropdown"
        isPlain={true}
        position={DropdownPosition.right}
        toggleId="device-detail-header-kebab-toggle"
        dropdownItems={dropdownItems}
      />
    );
  };

  return (
    <Split>
      <DeviceDetailLayout />
      <SplitItem isFilled />
      <SplitItem className={css(styles.kebab_toggle_margin)}>
        <SwitchWithToggle
          id="switch-device-header-enable-btn"
          label="Enabled"
          labelOff="Disabled"
          onChange={onChange}
          isChecked={deviceStatus}
        />
      </SplitItem>
      <SplitItem className={css(styles.kebab_toggle_margin)}>
        <KebabOptionsLayout />
      </SplitItem>
    </Split>
  );
};

export { DeviceDetailHeader };
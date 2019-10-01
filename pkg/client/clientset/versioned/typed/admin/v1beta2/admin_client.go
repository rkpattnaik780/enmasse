/*
 * Copyright 2018-2019, EnMasse authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */

// Code generated by client-gen. DO NOT EDIT.

package v1beta2

import (
	v1beta2 "github.com/enmasseproject/enmasse/pkg/apis/admin/v1beta2"
	"github.com/enmasseproject/enmasse/pkg/client/clientset/versioned/scheme"
	serializer "k8s.io/apimachinery/pkg/runtime/serializer"
	rest "k8s.io/client-go/rest"
)

type AdminV1beta2Interface interface {
	RESTClient() rest.Interface
	AddressPlansGetter
	AddressSpacePlansGetter
}

// AdminV1beta2Client is used to interact with features provided by the admin.enmasse.io group.
type AdminV1beta2Client struct {
	restClient rest.Interface
}

func (c *AdminV1beta2Client) AddressPlans(namespace string) AddressPlanInterface {
	return newAddressPlans(c, namespace)
}

func (c *AdminV1beta2Client) AddressSpacePlans(namespace string) AddressSpacePlanInterface {
	return newAddressSpacePlans(c, namespace)
}

// NewForConfig creates a new AdminV1beta2Client for the given config.
func NewForConfig(c *rest.Config) (*AdminV1beta2Client, error) {
	config := *c
	if err := setConfigDefaults(&config); err != nil {
		return nil, err
	}
	client, err := rest.RESTClientFor(&config)
	if err != nil {
		return nil, err
	}
	return &AdminV1beta2Client{client}, nil
}

// NewForConfigOrDie creates a new AdminV1beta2Client for the given config and
// panics if there is an error in the config.
func NewForConfigOrDie(c *rest.Config) *AdminV1beta2Client {
	client, err := NewForConfig(c)
	if err != nil {
		panic(err)
	}
	return client
}

// New creates a new AdminV1beta2Client for the given RESTClient.
func New(c rest.Interface) *AdminV1beta2Client {
	return &AdminV1beta2Client{c}
}

func setConfigDefaults(config *rest.Config) error {
	gv := v1beta2.SchemeGroupVersion
	config.GroupVersion = &gv
	config.APIPath = "/apis"
	config.NegotiatedSerializer = serializer.DirectCodecFactory{CodecFactory: scheme.Codecs}

	if config.UserAgent == "" {
		config.UserAgent = rest.DefaultKubernetesUserAgent()
	}

	return nil
}

// RESTClient returns a RESTClient that is used to communicate
// with API server by this client implementation.
func (c *AdminV1beta2Client) RESTClient() rest.Interface {
	if c == nil {
		return nil
	}
	return c.restClient
}

local version = std.extVar("VERSION");
local router = import "router.jsonnet";
local common = import "common.jsonnet";
{
  deployment(use_sasldb, instance, image_repo, collector_image_repo, router_secret)::
    {
      "apiVersion": "extensions/v1beta1",
      "kind": "Deployment",
      "metadata": {
        "labels": {
          "name": "qdrouterd",
          "app": "enmasse"
        },
        "annotations": {
          "instance": instance
        },
        "name": "qdrouterd"
      },
      "spec": {
        "replicas": 1,
        "template": {
          "metadata": {
            "labels": {
              "capability": "router",
              "name": "qdrouterd",
              "app": "enmasse"
            },
            "annotations": {
              "instance": instance
            }
          },
          "spec": {
            "containers": [ router.container(use_sasldb, image_repo, "", ""),
              router.collector(collector_image_repo, "32Mi") ],
            "volumes": [router.hawkular_volume(), router.secret_volume(router_secret)] +
              (if use_sasldb then [router.sasldb_volume()] else [])
          }
        }
      }
    }
}

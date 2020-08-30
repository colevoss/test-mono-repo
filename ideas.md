## Normalize Branch Name

```sh
 echo ${branchname//\//-} | awk '{print tolower($0)}'
```

## Generate service.yaml

```sh
(echo "cat <<EOF"; cat deployment.yaml; echo "EOF";) | bash > deployment_ready.yaml

// maybe cat afterwards
```

## Push Docker Build

https://github.com/docker/build-push-action/issues/78
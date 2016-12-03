submodule update test
===

```shell
$ git submodule add -f -b {BRANCH_NAME} {REPOSITORY_NAME} {FOLDER_NAME}
$ git submodule update --remote
```

`git submodule add`을 이용하면 `.gitmodules`에 submodule에 대한 정보가 생긴다.

후에 `git submodule update --remote`로 모든 submodule을 update 할 수 있다.  
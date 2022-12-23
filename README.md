# sxd

## Issue

* Issue - 提供内容分类
* Issue Comments - 提供内容

## Vue3 + Vite

* 官网
* 首页、隐私政策、用户协议等

```shell
# 创建前端站点
npm init vue@latest
#
pushd site
#
npm install
npm run dev
npm run build
#
popd
```

## Crawler

* 使用 Github Api 抓 Issue 和 Issue Comments 生成 JSON

```shell
#
pushd site crawler
#

#
popd
```

## Github Pages

* 存储 Crawler 生成的 JSON

## Github Action

* 定时运行 Crawler 任务，并将 Crawler 生成的 JSON 部署道 Github Pages

# Open Source Cloud Guide

A guide demonstrating how major cloud vendors use open source in their offerings

## Mission statement

Our goal is to show readers that open source software is essential to building cloud applications, whether they be on public cloud, private cloud, hybrid cloud, or multi-cloud.

## Background

Over the past two decades, the rise of cloud technologies and the proliferation of open source software have developed in tandem, with open source software now underpinning all major clouds. A [2020 O'Reilly Survey](https://www.ibm.com/downloads/cas/PXR1GGZN) highlights how hiring managers are looking for developers who have open source development, even more than skills related to a single proprietary cloud. The [2021 Open Source Jobs Report](https://www.linuxfoundation.org/resources/publications/open-source-jobs-report-2021/?SSAID=862413&sscid=91k5_w9w4l) from the Linux Foundation echoed this desire for developers who are skilled in open source software development.

With that backdrop, we decided to create a guide that highlights how cloud providers are using open source in their offerings and to offer guidance on where you can go to gain skills.

## Who is this for?

Largely, this guide is for software developers and technical folks wanting to know the landscape of open source software and their prevalence at major cloud providers.

## What is this not?

This guide will not:

* Deep-dive on any one technology.
* Exclude any cloud providers.
* Be an exhaustive list of all open source projects in the space.

## Updating pages

Update the following pages:

* [AI](src/pages/guides/ai.mdx)
* [APIs](src/pages/guides/serving-apis.mdx)
* [Big Data](src/pages/guides/big-data.mdx)
* [Containers](src/pages/guides/containers.mdx)
* [Databases](src/pages/guides/databases.mdx)
* [Teaming](src/pages/guides/teaming.mdx)

## How do I contribute?

Create a PR!

## How do I create a new guide?

1. Create a new file in [guides](src/pages/guides) based on the other files in that directory.
2. Update [nav-items.yaml](src/data/nav-items.yaml) to include the new file.

## Where can I view the guide?

<https://stevemar.github.io/open-source-cloud-guide-carbon>

## Build locally

Requirement:

* Node v14 (will not work on later versions)

> NOTE: You can use [n](https://www.npmjs.com/package/n) to switch between Node versions.

Clean files and build with dev mode. Open a browser to `localhost:8000`.

```bash
yarn clean; yarn dev
```

## Deploy

Build the pages

```bash
yarn build:prefix
```

> NOTE: When deploying make use of gatby's `--prefix-paths` option by building with: `yarn build:prefix` as opposed to `yarn build`

View the site, open a browser to `localhost:9000`.

```bash
yarn serve
```

<template>
  <Head>
    <Title>BUNI</Title>
    <Meta property="og:title" content="BUNI" />
    <Meta property="og:type" content="" />
    <Meta property="og:url" content="" />
    <Meta property="og:image" content="" />
    <Meta name="theme-color" content="#84BC02" />
  </Head>

  <header>
    <NuxtLink class="logo-wrapper" to="/">
      <span class="logo">
        <img src="~/assets/images/logo.svg" width="178" height="59" alt="KCB" />
      </span>
      <span class="logo-text">BUNI</span>
    </NuxtLink>

    <nav id="main_nav">
      <a href="/">Getting Started</a>
      <a href="/discover-apis.html" rel="noreferrer">Discover APIs</a>
      <a href="/buni-use-cases.html">Buni Use Cases</a>
      <a href="#">Partner Showcase</a>
      <a target="_blank" href="#" rel="noreferrer">Docs</a>
      <a href="/support.html">Support</a>
      <a target="_blank" href="#" rel="noreferrer" class="btn-nav"
        >Log in/ Sign up</a
      >
    </nav>
    <div class="navigation-hamburger -close">
      <div class="bar-wrap">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
      <div class="cross-wrap">
        <div class="cross-line cross-line1"></div>
        <div class="cross-line cross-line2"></div>
      </div>
    </div>
  </header>
</template>

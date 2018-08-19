---
layout: default
---

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" type="text/css">
<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<!-- Floating button-->
    <a href="#" class="upvote-btn float1">
      <i class="fa fa-arrow-circle-up  my-float"></i>
    </a>
    <div class="label-container1">
      <div class="label-text">Upvote</div>
      <i class="fa fa-play label-arrow"></i>
    </div>
    <a href="#" class="downvote-btn float2">
      <i class="fa fa-arrow-circle-down my-float"></i>
    </a>
    <div class="label-container2">
      <div class="label-text">Downvote</div>
      <i class="fa fa-play label-arrow"></i>
    </div>
    <a href="#" class="donate-btn float3">
      <i class="fas fa-donate my-float"></i>
    </a>
    <div class="label-container3">
      <div class="label-text">Donate</div>
      <i class="fa fa-play label-arrow"></i>
    </div>
    <!-- End of Floating Button -->

<article class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting">

  <header class="post-header">
    <h1 class="post-title p-name" itemprop="name headline">{{ page.title | escape }}</h1>
    <p class="post-meta">
      <time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        {{ page.date | date: date_format }}
      </time>
      {%- if page.author -%}
        • <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span class="p-author h-card" itemprop="name">{{ page.author }}</span></span>
      {%- endif -%}</p>
  </header>

  <div class="post-content e-content" itemprop="articleBody">
    {{ content }}
  </div>

  {%- if site.disqus.shortname -%}
    {%- include disqus_comments.html -%}
  {%- endif -%}

  <a class="u-url" href="{{ page.url | relative_url }}" hidden></a>
</article>

<script src="{{ "/assets/jquery.min.js" | relative_url }}"></script>
<script src="{{ "/assets/web3.min.js" | relative_url }}"></script>
<script src="{{ "/assets/main.js" | relative_url }}"></script>

"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8422],{47682:function(a,b,c){c.d(b,{rA:function(){return s},kB:function(){return u},hb:function(){return y},"$$":function(){return A},e1:function(){return C},fK:function(){return E},Et:function(){return N},KR:function(){return L},Zz:function(){return P},yU:function(){return I},Xv:function(){return G}});var d,e,f,g,h,i,j,k,l,m,n,o=c(71171),p=c(30382),q=c.n(p),r=q()(d||(d=(0,o.Z)(["\n  mutation addLetMeKnowMutation(\n    $sku: ID!\n    $name: String!\n    $email: String!\n    $newsletter: Boolean\n    $origin: String\n  ) {\n    addLetMeKnow(\n      letMeKnowRequest: {\n        sku: $sku\n        name: $name\n        email: $email\n        newsletter: $newsletter\n        origin: $origin\n      }\n    ) {\n      status\n    }\n  }\n"]))),s=r,t=q()(e||(e=(0,o.Z)(["\n  mutation addNewsletterMutation($name: String!, $email: String!, $origin: String!) {\n    addNewsletter(newsletterRequest: { name: $name, email: $email, origin: $origin }) {\n      status\n      message\n    }\n  }\n"]))),u=t,v=c(30382),w=v.default,x=w(f||(f=(0,o.Z)(["\n  mutation addProductReviewMutation(\n    $characteristics: [ReviewCharacteristicInput]!\n    $campaignId: String\n    $productId: ID!\n    $rating: Int!\n    $recommended: Boolean!\n    $text: String!\n    $title: String!\n    $userId: ID\n    $userLocation: String\n    $userName: String\n    $reviewDataJWT: String\n  ) {\n    addProductReview(\n      reviewRequest: {\n        characteristics: $characteristics\n        metadata: { campaignId: $campaignId }\n        productId: $productId\n        rating: $rating\n        recommended: $recommended\n        text: $text\n        title: $title\n        user: { id: $userId, name: $userName, location: $userLocation }\n        reviewDataJWT: $reviewDataJWT\n      }\n    ) {\n      id\n      status\n      payloadErrors {\n        field\n        message\n      }\n    }\n  }\n"]))),y=x,z=q()(g||(g=(0,o.Z)(["\n  mutation cartMutation(\n    $id: String\n    $productId: String!\n    $sellerId: String!\n    $extensions: DataValue\n    $quantity: String!\n    $services: [String]\n    $partnerId: String\n  ) {\n    addToCart(\n      cartRequest: {\n        id: $id\n        productId: $productId\n        sellerId: $sellerId\n        extensions: $extensions\n        quantity: $quantity\n        services: $services\n        partnerId: $partnerId\n      }\n    ) {\n      id\n      status\n    }\n  }\n"]))),A=z,B=q()(h||(h=(0,o.Z)(["\n  mutation sharedBagMutation(\n    $sharedBagId: String\n    $storeNumericId: Int!\n    $seller: String!\n    $sku: String!\n    $quantity: Int!\n  ) {\n    addToSharedBag(\n      sharedBagRequest: {\n        sharedBagId: $sharedBagId\n        storeNumericId: $storeNumericId\n        seller: $seller\n        sku: $sku\n        quantity: $quantity\n      }\n    ) {\n      id\n      store_id\n    }\n  }\n"]))),C=B,D=q()(i||(i=(0,o.Z)(["\n  mutation addToWishlistMutation(\n    $variationId: String!\n    $name: String\n    $price: Float\n    $userId: String!\n  ) {\n    addToWishlist(\n      wishlistRequest: {\n        userId: $userId\n        product: { id: $variationId, name: $name, price: $price }\n      }\n    ) {\n      status\n      item {\n        id\n        name\n        price\n        createdAt\n      }\n    }\n  }\n"]))),E=D,F=q()(j||(j=(0,o.Z)(["\n  mutation removeFromWishlistMutation($variationId: String!, $userId: String!) {\n    removeFromWishlist(\n      wishlistRequest: { userId: $userId, product: { id: $variationId } }\n    ) {\n      status\n    }\n  }\n"]))),G=F,H=q()(k||(k=(0,o.Z)(["\n  mutation createQuestion($questionRequest: QuestionMutationRequest!) {\n    createQuestion(questionRequest: $questionRequest) {\n      question\n    }\n  }\n"]))),I=H,J=c(48248),K=q()(l||(l=(0,o.Z)(["\n  mutation CreateMessage(\n    $conversationId: String!\n    $content: String!\n    $userFullname: String!\n    $userId: String!\n    $userName: String!\n    $customFields: [ChatMessageAttributeMutation]\n    $channel: String!\n    $organization: String!\n    $integration: Boolean = false\n  ) {\n    createMessage(\n      request: {\n        conversationId: $conversationId\n        channel: $channel\n        organization: $organization\n        message: {\n          integration: $integration\n          content: $content\n          fromUser: { fullName: $userFullname, refKey: $userId, username: $userName }\n          customFields: $customFields\n        }\n      }\n    ) {\n      ...chatMessage\n      ...chatMessageError\n    }\n  }\n  ","\n  ","\n"])),J.Hc,J._Z),L=K,M=q()(m||(m=(0,o.Z)(["\n  mutation CreateConversation($request: ChatCreateConversationRequest!) {\n    createConversation(request: $request) {\n      ... on ChatConversationResponse {\n        id\n        unreadFromCount\n        toUser {\n          refKey\n          fullName\n        }\n        lastInteractionAt\n      }\n    }\n  }\n"]))),N=M,O=q()(n||(n=(0,o.Z)(["\n  mutation UpdateReadbyConversation(\n    $conversationId: String!\n    $userId: String!\n    $organization: String!\n  ) {\n    updateReadbyConversation(\n      request: {\n        conversationId: $conversationId\n        organization: $organization\n        fromUserRefKey: $userId\n      }\n    ) {\n      ... on ChatConversationResponse {\n        id\n        unreadFromCount\n        toUser {\n          refKey\n          fullName\n        }\n        lastInteractionAt\n      }\n    }\n  }\n"]))),P=O},11690:function(a,b,c){c.d(b,{u:function(){return i}});var d,e=c(71171),f=c(30382),g=c.n(f),h=g()(d||(d=(0,e.Z)(["\n  query blogPostsListQuery(\n    $postIds: [ID]\n    $blogCategoryId: String\n    $withChildren: Boolean\n    $page: Int = 1\n    $pageSize: Int = 9\n    $limit: Int\n    $start: Int\n  ) {\n    blogPostsListing(\n      postIds: $postIds\n      categoryId: $blogCategoryId\n      withChildren: $withChildren\n      pagination: { page: $page, pageSize: $pageSize }\n      limit: $limit\n      start: $start\n    ) {\n      posts {\n        id\n        title\n        subtitle\n        slug\n        publishedAt\n        updatedAt\n        categoryId\n        categorySlug\n        categoryTitle\n        image {\n          alt\n          urls {\n            default\n            thumbnail\n            small\n            medium\n            large\n          }\n        }\n      }\n      pagination {\n        page\n        pages\n        records\n        size\n        start\n      }\n    }\n  }\n"]))),i=h},90166:function(a,b,c){c.d(b,{A:function(){return i}});var d,e=c(71171),f=c(30382),g=c.n(f),h=g()(d||(d=(0,e.Z)(['\n  query ListConversations(\n    $organization: String! = ""\n    $channel: String! = ""\n    $fromUser: String! = ""\n    $toUser: String = ""\n    $offset: Int = 0\n    $limit: Int = 10\n    $status: ChatConversationStatusEnum = OPENED\n    $search: String = ""\n  ) {\n    listConversations(\n      request: {\n        organization: $organization\n        filters: {\n          status: $status\n          fromUserRefKey: $fromUser\n          toUserRefKey: $toUser\n          channel: $channel\n          displayName: $search\n        }\n        pagination: { offset: $offset, limit: $limit }\n      }\n    ) {\n      ... on ChatPaginationResponse {\n        results {\n          id\n          unreadFromCount\n          toUser {\n            refKey\n            fullName\n          }\n          lastInteractionAt\n          lastMessage {\n            content\n          }\n        }\n        meta {\n          page {\n            offset\n            limit\n          }\n          links {\n            previous\n            next\n          }\n        }\n      }\n      ... on ChatErrorResponse {\n        slug\n        message\n      }\n    }\n  }\n']))),i=h},70876:function(a,b,c){c.d(b,{t2:function(){return am},p1:function(){return aP},mv:function(){return ao},gM:function(){return aq},"$w":function(){return bE},ZW:function(){return at},rk:function(){return aw},u7:function(){return au.u},pt:function(){return aA},GW:function(){return aN},p8:function(){return aC},AW:function(){return bG.A},lS:function(){return aF},O:function(){return aH},eM:function(){return aJ},gG:function(){return bD},nh:function(){return bC},W9:function(){return aR},WG:function(){return aS.Z},kt:function(){return bb},sO:function(){return a2},Qi:function(){return a4},zL:function(){return a5},od:function(){return a9},Dj:function(){return ba},Jb:function(){return bc},Cr:function(){return bd},GU:function(){return a6},be:function(){return bk},"$l":function(){return bl},Im:function(){return be},EN:function(){return bj},yG:function(){return bi},tR:function(){return bo},VG:function(){return bs},l2:function(){return a8},rQ:function(){return bt},uS:function(){return bu},aQ:function(){return bv},cR:function(){return bw},GK:function(){return bF},Ys:function(){return ay}});var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af,ag,ah,ai=c(71171),aj=c(30382),ak=c.n(aj),al=ak()(d||(d=(0,ai.Z)(['\n  query($letter: String! = "a", $page: Int = 1, $pageSize: Int = 30) {\n    brandList(brandListRequest: { letter: $letter, page: $page, pageSize: $pageSize }) {\n      brands {\n        slug\n        letter\n        brand\n      }\n      pageSize\n      pages\n      records\n    }\n  }\n']))),am=al,an=ak()(e||(e=(0,ai.Z)(["\n  query blogFooterQuery {\n    blogFooter {\n      linkList {\n        text\n        href\n      }\n    }\n  }\n"]))),ao=an,ap=ak()(f||(f=(0,ai.Z)(["\n  query blogHeaderQuery {\n    blogHeader {\n      LinksGroup {\n        label\n        linkList {\n          value\n          href\n          alt\n        }\n      }\n    }\n  }\n"]))),aq=ap,ar=c(59271),as=ak()(g||(g=(0,ai.Z)(["\n  query blogPostContent($postId: ID!) {\n    blogPostContent(id: $postId) {\n      id\n      title\n      subtitle\n      content\n      slug\n      updatedAt\n      ecommCategories {\n        categoryId\n      }\n      seo {\n        title\n        description\n      }\n      category {\n        id\n        title\n        slug\n        categoryId\n      }\n      subcategory {\n        id\n        title\n        slug\n        categoryId\n      }\n      recommendations {\n        ...recommendations\n      }\n      relatedRecommendations {\n        ...recommendations\n      }\n      image {\n        alt\n        urls {\n          default\n          thumbnail\n          small\n          medium\n          large\n        }\n      }\n      linkList {\n        ...linkList\n      }\n      tags {\n        ...tags\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"])),ar.Cn,ar.wc,ar.Ge,ar.$v),at=as,au=c(11690),av=ak()(h||(h=(0,ai.Z)(['\n  query blogPostByEcommCategory(\n    $categoryId: String = ""\n    $subCategoryId: String = ""\n    $blogPostQuantity: Int = 3\n  ) {\n    blogPostsByEcomm(\n      ecommCategory: $categoryId\n      ecommSubcategory: $subCategoryId\n      quantity: $blogPostQuantity\n    ) {\n      posts {\n        id\n        title\n        subtitle\n        image {\n          urls {\n            default\n          }\n        }\n        slug\n      }\n    }\n  }\n']))),aw=av,ax=ak()(i||(i=(0,ai.Z)(["\n  query BlogTagContentQuery($tagId: ID, $page: Int = 1, $pageSize: Int) {\n    blogTagContent(id: $tagId, pagination: { page: $page, pageSize: $pageSize }) {\n      title\n      seo {\n        ...seo\n      }\n      postlist {\n        postItems {\n          ...posts\n        }\n        pagination {\n          page\n          pages\n          records\n          start\n          size\n        }\n      }\n    }\n  }\n  ","\n  ","\n"])),ar.QM,ar.wc),ay=ax,az=ak()(j||(j=(0,ai.Z)(['\n  query cartQuery($cartId: String = "") {\n    cart(cartRequest: { id: $cartId }) {\n      totals {\n        itemsQuantity\n      }\n    }\n  }\n']))),aA=az,aB=ak()(k||(k=(0,ai.Z)(['\n  query channelQuery($storeId: String = "") {\n    channel(infoRequest: { params: [{ name: "showCaseName", value: $storeId }] }) {\n      name\n      data {\n        name\n        value\n      }\n    }\n  }\n']))),aC=aB,aD=c(48248),aE=ak()(l||(l=(0,ai.Z)(["\n  query ListMessages(\n    $conversationId: String!\n    $channel: String!\n    $organization: String!\n    $paginationLimit: Int!\n    $paginationOffset: Int!\n    $filters: ChatFiltersMessage\n  ) {\n    listMessages(\n      request: {\n        conversationId: $conversationId\n        channel: $channel\n        organization: $organization\n        pagination: { limit: $paginationLimit, offset: $paginationOffset }\n        filters: $filters\n      }\n    ) {\n      ... on ChatErrorResponse {\n        message\n        slug\n        __typename\n      }\n      ... on ChatMessagePaginationResponse {\n        meta {\n          links {\n            next\n            previous\n          }\n        }\n        results {\n          ...chatMessage\n        }\n      }\n    }\n  }\n  ","\n"])),aD.Hc),aF=aE,aG=ak()(m||(m=(0,ai.Z)(["\n  query CheckNotifications(\n    $channel: String!\n    $organization: String!\n    $customerRefKey: String!\n  ) {\n    checkNotifications(\n      request: {\n        channel: $channel\n        organization: $organization\n        filters: { customerRefKey: $customerRefKey }\n      }\n    ) {\n      ... on ChatErrorResponse {\n        message\n        slug\n      }\n      ... on ChatCheckNotificationsResponse {\n        hasNotification\n        hasNewMessages\n        hasNewConversations\n      }\n    }\n  }\n"]))),aH=aG,aI=ak()(n||(n=(0,ai.Z)(["\n  query GetNotifications(\n    $channel: String!\n    $organization: String!\n    $customerRefKey: String!\n    $startsAt: String = null\n  ) {\n    getNotifications(\n      request: {\n        channel: $channel\n        organization: $organization\n        filters: { customerRefKey: $customerRefKey, startsAt: $startsAt }\n      }\n    ) {\n      ... on ChatErrorResponse {\n        message\n        slug\n      }\n      ... on ChatNotificationsResponse {\n        conversationId\n        fromUserId\n        countMessagesNew\n        resumeLastMessage\n        dateLastMessage\n      }\n    }\n  }\n"]))),aJ=aI,aK=ak()(o||(o=(0,ai.Z)(["\n  fragment category on Category {\n    id\n    label\n    title\n    description\n    meta {\n      description\n      seoBlock\n      canonical\n      titleAlias\n    }\n  }\n"]))),aL=aK,aM=ak()(p||(p=(0,ai.Z)(['\n  query categoryQuery(\n    $categoryId: String\n    $subCategoryId: String = ""\n    $storeId: String\n  ) {\n    category(\n      categoryRequest: {\n        category: $categoryId\n        subcategory: $subCategoryId\n        metadata: { loyaltyParams: { storeId: $storeId } }\n      }\n    ) {\n      ...category\n      subcategories {\n        ...category\n        subcategories {\n          ...category\n          subcategories {\n            ...category\n            subcategories {\n              ...category\n            }\n          }\n        }\n      }\n    }\n  }\n  ',"\n"])),aL),aN=aM,aO=ak()(q||(q=(0,ai.Z)(["\n  query allCategoriesQuery($storeId: String) {\n    allCategories: category(\n      categoryRequest: { metadata: { loyaltyParams: { storeId: $storeId } } }\n    ) {\n      meta {\n        canonical\n        breadcrumbAlias\n        description\n        seoBlock\n      }\n      label\n      id\n      description\n    }\n  }\n"]))),aP=aO,aQ=ak()(r||(r=(0,ai.Z)(["\n  query locationQuery($zipCode: String) {\n    location(locationRequest: { zipCode: $zipCode }) {\n      state\n      city\n      latitude\n      longitude\n    }\n  }\n"]))),aR=aQ,aS=c(19934),aT=ak()(s||(s=(0,ai.Z)(["\n  fragment dimensions on Dimension {\n    height\n    length\n    weight\n    width\n  }\n"]))),aU=aT,aV=ak()(t||(t=(0,ai.Z)(["\n  fragment factsheet on FactSheet {\n    displayName\n    slug\n    elements {\n      keyName\n      elements {\n        keyName\n        isHtml\n        value\n      }\n    }\n  }\n"]))),aW=aV,aX=ak()(u||(u=(0,ai.Z)(["\n  fragment bundles on Bundle {\n    id\n    image\n    price\n    quantity\n    reference\n    title\n    dimensions {\n      ...dimensions\n    }\n    factsheet {\n      ...factsheet\n    }\n  }\n  ","\n  ","\n"])),aU,aW),aY=aX,aZ=ak()(v||(v=(0,ai.Z)(["\n  fragment seller on Seller {\n    id\n    sku\n    description\n    category\n    deliveryId\n    deliveryDescription\n    details {\n      id\n      legalName\n      documentNumber\n      score\n      address {\n        address\n        number\n        complement\n        district\n        city\n        state\n        country\n        zipcode\n      }\n    }\n  }\n"]))),a$=aZ,a_=ak()(w||(w=(0,ai.Z)(["\n  fragment product on Product {\n    id\n    variationId\n    title\n    description\n    image\n    available\n    position\n    isBuyBox\n    url\n    path\n    reference\n    offerTags\n    attributes {\n      type\n      label\n      value\n      current\n      values\n    }\n    seller {\n      ...seller\n    }\n    brand {\n      label\n      slug\n    }\n    price {\n      paymentMethodDescription\n      price\n      fullPrice\n      bestPrice\n      discount\n    }\n    installment {\n      paymentMethodDescription\n      quantity\n      amount\n      totalAmount\n    }\n    rating {\n      count\n      score\n    }\n    badges {\n      text\n      imageUrl\n      container\n      position\n      tooltip\n    }\n    category {\n      id\n      name\n    }\n    subcategory {\n      id\n      name\n    }\n    loyalty {\n      value\n      type\n      attributes {\n        color\n        icon\n      }\n      label\n      description\n    }\n  }\n  ","\n"])),a$),a0=a_,a1=ak()(x||(x=(0,ai.Z)(["\n  query productQuery(\n    $productId: String\n    $partnerId: String\n    $sellerId: String\n    $zipcode: String\n    $includeDescription: Boolean = false\n    $showUnavailable: Boolean = false\n    $showPayment: Boolean = false\n    $includeFactSheet: Boolean = false\n    $includeTerms: Boolean = false\n    $pmdPromoter: String\n    $storeId: String\n    $termsSize: Int = 20\n  ) {\n    product(\n      productRequest: {\n        id: $productId\n        partnerId: $partnerId\n        sellerId: $sellerId\n        showDescription: $includeDescription\n        showUnavailable: $showUnavailable\n        showPayment: $showPayment\n        zipcode: $zipcode\n        metadata: { loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId } }\n      }\n    ) {\n      ...product\n      terms(termsSize: $termsSize) @include(if: $includeTerms)\n      factsheet @include(if: $includeFactSheet) {\n        ...factsheet\n      }\n      isOnWishlist\n      variations {\n        id\n        label\n        type\n        value\n        image\n        available\n        path\n        media {\n          images\n          videos\n          podcasts\n        }\n      }\n      media {\n        audios\n        images\n        podcasts\n        videos\n      }\n      badges {\n        imageUrl\n        tooltip\n        text\n      }\n      financialServices {\n        id\n        description\n        offers {\n          campaignId\n          description\n          id\n          price\n          treeId\n          wageCompensation {\n            amount\n            percentage\n          }\n        }\n      }\n      offers {\n        sku\n        price {\n          paymentMethodDescription\n          bestPrice\n          fullPrice\n          price\n          currency\n          discount\n        }\n        seller {\n          ...seller\n        }\n      }\n      paymentMethods {\n        id\n        installmentPlans {\n          installment\n          installmentAmount\n          interest\n          interestAmount\n          totalAmount\n          discount\n        }\n      }\n      type\n      bundles {\n        ...bundles\n      }\n      dimensions {\n        ...dimensions\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),a0,aW,a$,aY,aU),a2=a1,a3=ak()(y||(y=(0,ai.Z)(["\n  query ProductRating(\n    $variationId: String\n    $filters: [Filter]\n    $page: Int = 1\n    $pageSize: Int = 8\n    $sortType: UserReviewsSortType = MORE_RELEVANT\n  ) {\n    productRating(variationId: $variationId) {\n      general {\n        rating\n        reviewCount\n        commentCount\n      }\n      reviewsByRating {\n        rating\n        total\n      }\n      userReviews(\n        userReviewRequest: {\n          filters: $filters\n          pagination: { page: $page, size: $pageSize }\n          sortType: $sortType\n        }\n      ) {\n        items {\n          reviewId\n          campaignId\n          description\n          recommended\n          status\n          rating\n          title\n          submissionDate\n          userData {\n            email\n            name\n            customerId\n          }\n          attributes {\n            label\n            value\n          }\n          dimensionDefs {\n            id\n            label\n          }\n          dimensions {\n            id\n            label\n            rating\n          }\n        }\n        page {\n          current\n          totalItems\n          totalPages\n        }\n      }\n      dimensions {\n        id\n        label\n        rating\n      }\n      dimensionDefs {\n        id\n        label\n      }\n    }\n  }\n"]))),a4=a3,a5=ak()(z||(z=(0,ai.Z)(['\n  query questions(\n    $questionVariationId: String! = ""\n    $org: String! = ""\n    $itemsPerPage: Int = 50\n    $page: Int = 1\n  ) {\n    questions(\n      questionRequest: {\n        variationId: $questionVariationId\n        org: $org\n        itemsPerPage: $itemsPerPage\n        page: $page\n      }\n    ) {\n      items {\n        id\n        question\n        questionCreatedAt\n        answer\n        answerCreatedAt\n      }\n      sellerInfo {\n        enabled\n      }\n      totalQuestions\n      pagination {\n        page\n        totalPages\n      }\n    }\n  }\n']))),a6=ak()(A||(A=(0,ai.Z)(["\n  query seller($questionSellerId: String) {\n    sellerQuestions: seller(sellerId: $questionSellerId) {\n      enabled\n    }\n  }\n"]))),a7=ak()(B||(B=(0,ai.Z)(["\n  fragment pagination on ShowCasePagination {\n    next\n    previous\n  }\n"]))),a8=ak()(C||(C=(0,ai.Z)(["\n  query showcaseQuery(\n    $showcaseId: String\n    $customerId: String\n    $placeId: String\n    $pageId: String\n    $partnerId: String\n    $pmdPromoter: String\n    $storeId: String\n    $productId: String\n    $filters: [FilterInput]\n    $includePagination: Boolean = true\n    $toggleWishlist: Boolean = true\n    $zipCode: String\n  ) {\n    recommendation(\n      recommendationRequest: {\n        customerId: $customerId\n        pageId: $pageId\n        placeId: $placeId\n        productId: $productId\n        metadata: {\n          partnerId: $partnerId\n          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }\n        }\n        filters: $filters\n        searchRequest: { location: { zipCode: $zipCode } }\n      }\n    ) {\n      dynamic(showcaseId: $showcaseId) {\n        id\n        title\n        type\n        designTokenId\n        products {\n          ...product\n          isOnWishlist @include(if: $toggleWishlist)\n          shippingTag {\n            cost\n            time\n            complement\n          }\n        }\n        highlight {\n          ...product\n          shippingTag {\n            cost\n            time\n            complement\n          }\n        }\n        button {\n          label\n        }\n        pagination {\n          ...pagination @include(if: $includePagination)\n        }\n      }\n    }\n  }\n  ","\n  ","\n"])),a0,a7),a9=ak()(D||(D=(0,ai.Z)(["\n  query ReviewCharacteristicsQuery($productId: ID!) {\n    reviewCharacteristics(reviewRequest: { id: $productId }) {\n      id\n      label\n    }\n  }\n"]))),ba=ak()(E||(E=(0,ai.Z)(["\n  query reviewQuery(\n    $productId: String\n    $reviewPage: Int = 1\n    $reviewPageSize: Int\n    $reviewSortType: String\n    $reviewSortOrientation: String\n  ) {\n    review(\n      reviewRequest: {\n        id: $productId\n        pagination: { page: $reviewPage, size: $reviewPageSize }\n        sort: { type: $reviewSortType, orientation: $reviewSortOrientation }\n      }\n    ) {\n      stats {\n        count\n        average\n        distribution {\n          value\n          count\n        }\n        characteristics {\n          label\n          value\n        }\n      }\n      reviews {\n        title\n        text\n        rating\n        recommended\n        user {\n          name\n        }\n        date\n        characteristics {\n          label\n          value\n        }\n      }\n      sorts {\n        type\n        orientation\n        label\n      }\n      pagination {\n        page\n        pages\n        size\n        start\n      }\n    }\n  }\n"]))),bb=ak()(F||(F=(0,ai.Z)(['\n  query pageRedirectQuery($pagePath: String = "") {\n    pageRedirect(originUri: $pagePath) {\n      originUri\n      redirectUri\n    }\n  }\n']))),bc=ak()(G||(G=(0,ai.Z)(['\n  query searchQuery(\n    $term: String = ""\n    $filters: [FilterInput]\n    $sortType: String\n    $sortOrientation: String\n    $page: Int\n    $pageSize: Int = 20\n    $zipCode: String\n    $latitude: Float\n    $longitude: Float\n    $pmdPromoter: String\n    $storeId: String\n    $partnerId: String\n    $sellerId: String\n    $customerId: String\n    $showUnavailable: Boolean = true\n    $includeProduct: Boolean = true\n    $searchExperiment: String\n    $alwaysShowSubcategoryFilters: Boolean = true\n    $toggleWishlist: Boolean = true\n  ) {\n    search(\n      searchRequest: {\n        query: $term\n        pagination: { page: $page, size: $pageSize }\n        filters: $filters\n        sort: { type: $sortType, orientation: $sortOrientation }\n        location: { zipCode: $zipCode, latitude: $latitude, longitude: $longitude }\n        metadata: {\n          partnerId: $partnerId\n          sellerId: $sellerId\n          showUnavailable: $showUnavailable\n          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }\n          customerId: $customerId\n          searchExperiment: $searchExperiment\n          alwaysShowSubcategoryFilters: $alwaysShowSubcategoryFilters\n        }\n      }\n    ) {\n      products {\n        ...product @include(if: $includeProduct)\n        isOnWishlist @include(if: $toggleWishlist)\n        ads {\n          sponsored\n          id\n          label\n          adRequestId\n          adResponseId\n          adsMatchReason\n          adsRequestedCount\n          adsReturnedCount\n          brand\n          campaignId\n          category\n          gender\n          offerId\n          navigationId\n          sku\n          subCategory\n        }\n        shippingCost {\n          cost\n          costDescription\n        }\n        shippingTag {\n          error\n          time\n          cost\n          complement\n          source\n        }\n        type\n        dimensions {\n          ...dimensions\n        }\n        bundles {\n          ...bundles\n        }\n      }\n      adsFillRate {\n        adRequestId\n        adResponseId\n        adsMatchReason\n        adsRequestedCount\n        adsReturnedCount\n      }\n      sorts {\n        label\n        selected\n        type\n        orientation\n      }\n      pagination {\n        page\n        pages\n        records\n        start\n        size\n      }\n      filters {\n        type\n        slug\n        label\n        min\n        max\n        selectedMin\n        selectedMax\n        values {\n          id\n          slug\n          label\n          count\n          position\n          selected\n          type\n          values {\n            id\n            slug\n            label\n            count\n            selected\n            parent {\n              id\n              slug\n              label\n              count\n            }\n            values {\n              id\n              slug\n              label\n              count\n              selected\n              type\n            }\n          }\n        }\n      }\n      selection {\n        id\n        name\n        description\n      }\n      fastFilters {\n        id\n        label\n        slug\n        type\n        values {\n          label\n          id\n          slug\n          type\n          values\n          icon\n          url\n          filterType\n          selected\n        }\n      }\n      viewMode\n    }\n  }\n  ',"\n  ","\n  ","\n"])),a0,aY,aU),bd=ak()(H||(H=(0,ai.Z)(["\n  query recommendationQuery(\n    $query: String\n    $filters: [FilterInput]\n    $sort: String\n    $orientation: String\n    $page: Int\n    $pageSize: Int = 20\n    $customerId: String\n    $zipCode: String\n    $latitude: Float\n    $longitude: Float\n    $partnerId: String\n    $showUnavailable: Boolean = true\n    $toggleWishlist: Boolean = true\n  ) {\n    recommendation(\n      recommendationRequest: {\n        customerId: $customerId\n        searchRequest: {\n          query: $query\n          pagination: { page: $page, size: $pageSize }\n          filters: $filters\n          sort: { type: $sort, orientation: $orientation }\n          location: { zipCode: $zipCode, latitude: $latitude, longitude: $longitude }\n          metadata: { partnerId: $partnerId, showUnavailable: $showUnavailable }\n        }\n      }\n    ) {\n      search {\n        title\n        products {\n          ...product\n          isOnWishlist @include(if: $toggleWishlist)\n        }\n      }\n    }\n  }\n  ","\n"])),a0),be=ak()(I||(I=(0,ai.Z)(["\n  query seo($categoryId: String, $subCategoryId: String) {\n    seo(seoRequest: { category: $categoryId, subcategory: $subCategoryId }) {\n      category {\n        ...category\n        subcategories {\n          ...category\n          subcategories {\n            ...category\n            subcategories {\n              ...category\n              subcategories {\n                ...category\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ","\n"])),aL),bf=ak()(J||(J=(0,ai.Z)(["\n  fragment faq on ComponentPresentationFaq {\n    Answer\n    Question\n  }\n"]))),bg=ak()(K||(K=(0,ai.Z)(["\n  fragment meta on ComponentPresentationMeta {\n    title\n    description\n    canonical\n  }\n"]))),bh=ak()(L||(L=(0,ai.Z)(["\n  fragment supportText on ComponentPresentationSupportText {\n    preview\n    content\n  }\n"]))),bi=ak()(M||(M=(0,ai.Z)(['\n  query seoSearchContent($term: String! = "") {\n    seoSearchContent(query: $term) {\n      id\n      h1\n      faq {\n        ...faq\n      }\n      meta {\n        ...meta\n      }\n      supportText {\n        ...supportText\n      }\n    }\n  }\n  ',"\n  ","\n  ","\n"])),bf,bg,bh),bj=ak()(N||(N=(0,ai.Z)(['\n  query seoSearchContent($customTerm: String! = "") {\n    seoSearchContent(query: $customTerm) {\n      id\n      h1\n      faq {\n        ...faq\n      }\n      meta {\n        ...meta\n      }\n      supportText {\n        ...supportText\n      }\n    }\n  }\n  ',"\n  ","\n  ","\n"])),bf,bg,bh),bk=ak()(O||(O=(0,ai.Z)(["\n  query seoDepartmentContent($categoryId: String!, $subCategoryId: String) {\n    seoDepartmentContent(categoryId: $categoryId, subcategoryId: $subCategoryId) {\n      h1\n      faq {\n        ...faq\n      }\n      linkList {\n        href\n        alt\n        value\n      }\n      meta {\n        ...meta\n      }\n      supportText {\n        ...supportText\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"])),bf,bg,bh),bl=ak()(P||(P=(0,ai.Z)(['\n  query seoPdpContent($productId: String = "") {\n    seoPdpContent(productId: $productId) {\n      ids {\n        productId\n      }\n      faq {\n        ...faq\n      }\n      meta {\n        ...meta\n      }\n    }\n  }\n  ',"\n  ","\n"])),bf,bg),bm=ak()(Q||(Q=(0,ai.Z)(["\n  fragment Article on ComponentPresentationArticle {\n    title\n    content\n  }\n"]))),bn=ak()(R||(R=(0,ai.Z)(["\n  fragment FinancialServiceCards on ComponentPresentationFinancialServiceCards {\n    code\n    title\n    description\n    agreementText\n    luContentURL\n    logoURL\n    benefit {\n      description\n    }\n    chargingTerms\n  }\n"]))),bo=ak()(S||(S=(0,ai.Z)(["\n  query serviceContent {\n    serviceContent {\n      footerContent: Article {\n        ...Article\n      }\n      financialServicesContent: FinancialServiceCards {\n        ...FinancialServiceCards\n      }\n      authorizationTermText\n    }\n  }\n  ","\n  ","\n"])),bm,bn),bp=ak()(T||(T=(0,ai.Z)(["\n  fragment shippings on ShippingResponse {\n    status\n    shippings {\n      id\n      name\n      packages {\n        price\n        seller\n        sellerDescription\n        deliveryTypes {\n          id\n          description\n          type\n          time\n          price\n        }\n      }\n    }\n  }\n"]))),bq=ak()(U||(U=(0,ai.Z)(["\n  fragment estimate on EstimateResponse {\n    disclaimers {\n      sequence\n      message\n    }\n    deliveries {\n      id\n      items {\n        bundleComposition {\n          quantity\n          sku\n        }\n        gifts {\n          quantity\n          sku\n        }\n        quantity\n        seller {\n          id\n          name\n          sku\n        }\n        type\n      }\n      modalities {\n        id\n        type\n        name\n        serviceProviders\n        shippingTime {\n          unit\n          value {\n            min\n            max\n          }\n          description\n          disclaimers {\n            sequence\n            message\n          }\n        }\n        campaigns {\n          id\n          name\n          skus\n        }\n        cost {\n          customer\n          operation\n        }\n        zipCodeRestriction\n      }\n      provider {\n        id\n      }\n      status {\n        code\n        message\n      }\n    }\n    shippingAddress {\n      city\n      district\n      ibge\n      latitude\n      longitude\n      prefixZipCode\n      state\n      street\n      zipCode\n    }\n    status\n  }\n"]))),br=ak()(V||(V=(0,ai.Z)(["\n  fragment estimateError on EstimateErrorResponse {\n    error\n    status\n    message\n  }\n"]))),bs=ak()(W||(W=(0,ai.Z)(["\n  query shippingQuery($shippingRequest: ShippingRequest!) {\n    shipping(shippingRequest: $shippingRequest) {\n      status\n      ...shippings\n      ...estimate\n      ...estimateError\n    }\n  }\n  ","\n  ","\n  ","\n"])),br,bq,bp),bt=ak()(X||(X=(0,ai.Z)(["\n  query suggestQuery(\n    $query: String!\n    $termsSize: Int\n    $productsSize: Int = 0\n    $categoriesSize: Int\n    $brandsSize: Int\n    $partnerId: String\n    $skipProducts: Boolean = false\n  ) {\n    suggest(\n      suggestRequest: {\n        query: $query\n        termsSize: $termsSize\n        productsSize: $productsSize\n        categoriesSize: $categoriesSize\n        brandsSize: $brandsSize\n        metadata: { partnerId: $partnerId }\n      }\n    ) {\n      terms {\n        term\n        count\n      }\n      products @skip(if: $skipProducts) {\n        id\n        variationId\n        title\n        price {\n          realPrice: price\n        }\n        path\n        image\n      }\n    }\n  }\n"]))),bu=ak()(Y||(Y=(0,ai.Z)(["\n  query topTermsQuery($termsSize: Int) {\n    topTerms(topTermsRequest: { size: $termsSize }) {\n      label\n      terms\n    }\n  }\n"]))),bv=ak()(Z||(Z=(0,ai.Z)(['\n  query wishlistEnrichedQuery($customerId: String = "") {\n    search: wishlistEnriched(wishlistRequest: { userId: $customerId }) {\n      id\n      count\n      products {\n        ...product\n        isOnWishlist\n      }\n    }\n  }\n  ',"\n"])),a0),bw=ak()($||($=(0,ai.Z)(['\n  query wishlistQuery($userId: String = "") {\n    wishlist(wishlistRequest: { userId: $userId }) {\n      id\n      count\n      items {\n        id\n      }\n    }\n  }\n']))),bx=ak()(_||(_=(0,ai.Z)(["\n  fragment meta on ComponentPresentationMeta {\n    title\n    description\n    canonical\n  }\n"]))),by=ak()(aa||(aa=(0,ai.Z)(["\n  fragment item on ListHome {\n    items {\n      id\n      image {\n        src\n        alt\n      }\n      link {\n        text\n        href\n      }\n    }\n  }\n"]))),bz=ak()(ab||(ab=(0,ai.Z)(["\n  fragment sharedItems on ComponentSharedItem {\n    title\n    description\n    image {\n      src\n      width\n      height\n    }\n    link {\n      text\n      href\n    }\n  }\n"]))),bA=ak()(ac||(ac=(0,ai.Z)(["\n  fragment newsletter on Newsletter {\n    origin\n    invalidEmail\n    invalidName\n    default {\n      ...sharedItems\n    }\n    success {\n      ...sharedItems\n    }\n    error {\n      ...sharedItems\n    }\n  }\n  ","\n"])),bz),bB=ak()(ad||(ad=(0,ai.Z)(["\n  fragment linkList on ComponentPresentationLinkList {\n    href\n    value\n    alt\n  }\n"]))),bC=ak()(ae||(ae=(0,ai.Z)(["\n  query homePageContent(\n    $site: String\n    $includeMeta: Boolean = false\n    $includePopularDepartments: Boolean = false\n    $includeHotlinks: Boolean = false\n    $includeNewsletter: Boolean = false\n    $includeLinkList: Boolean = false\n  ) {\n    homePageContent(storeId: $site) {\n      storeId\n      h1\n      meta @include(if: $includeMeta) {\n        ...meta\n      }\n      popularDepartments @include(if: $includePopularDepartments) {\n        ...item\n      }\n      hotLinks @include(if: $includeHotlinks) {\n        ...item\n      }\n      newsletter @include(if: $includeNewsletter) {\n        ...newsletter\n      }\n      linkList @include(if: $includeLinkList) {\n        ...linkList\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),bx,by,by,bA,bB),bD=ak()(af||(af=(0,ai.Z)(["\n  query homeBlogContent($recommendationsLimit: Int = 2, $postsLimit: Int = 3) {\n    blogHomeContent(\n      recommendationsLimit: $recommendationsLimit\n      recommendationPostsLimit: $postsLimit\n    ) {\n      recommendations {\n        id\n        posts {\n          id\n          title\n          subtitle\n          image {\n            urls {\n              default\n            }\n          }\n          slug\n        }\n      }\n    }\n    blogPostsListing(limit: $postsLimit, start: 0) {\n      posts {\n        id\n        title\n        subtitle\n        image {\n          urls {\n            default\n          }\n        }\n        slug\n      }\n    }\n  }\n"]))),bE=ak()(ag||(ag=(0,ai.Z)(["\n  query blogHomeContent {\n    blogHomeContent {\n      recommendations {\n        ...recommendations\n      }\n      seo {\n        ...seo\n      }\n      linkList {\n        ...linkList\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"])),ar.Cn,ar.QM,ar.Ge),bF=ak()(ah||(ah=(0,ai.Z)(["\n  query blogCategoryContent($categoryId: String) {\n    blogCategoryContent(categoryId: $categoryId) {\n      id\n      h1\n      slug\n      title\n      description\n      categoryId\n      ecommCategories {\n        categoryId\n      }\n      parentCategory {\n        id\n        categoryId\n        slug\n        title\n      }\n      seo {\n        ...seo\n      }\n      recommendations {\n        ...recommendations\n      }\n      linkList {\n        ...linkList\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"])),ar.Cn,ar.QM,ar.Ge),bG=c(90166)},19934:function(a,b,c){var d,e=c(71171),f=c(30382),g=c.n(f),h=g()(d||(d=(0,e.Z)(["\n  query login($secret: String!) {\n    login(secret: $secret) {\n      token\n    }\n  }\n"])));b.Z=h}}])
//# sourceMappingURL=8422-deacbee4c669cd51.js.map
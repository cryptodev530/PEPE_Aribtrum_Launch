(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{1086:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var i=n(3),c=n.n(i),a=n(32),o=n(9),r=n(5),l=n(21),s=n(11),d=n(1),u=n(49),b=n(10),j=n(2),O=n(310),p=n(16),v=n(29),x=n(746),h=n(738),C=n(785),R=n(820),f=n(739),m=n(773),y=n(737),N=n(136),g=n(786),E=n(51),U=n(141),_=n(110),A=n(821),Y=n(822),B=n(212),I=n(30),w=n(755),k=n(117),S=n(340),P=n(322),T=b.e.BigInt(0);function D(){return Object(I.c)((function(e){return e.mint}))}var q=n(328),M=n(69),V=n(47);function z(e){if(e)return e.currency===b.d?b.e.greaterThan(e.raw,E.n)?b.c.ether(b.e.subtract(e.raw,E.n)):b.c.ether(b.e.BigInt(0)):e}var L=n(747),F=n(0);var G=function(e){var t,n,i,c,a,o,r,l,s=e.noLiquidity,d=e.price,u=e.currencies,b=e.parsedAmounts,O=e.poolTokenPercentage,v=e.onAdd,x=Object(p.b)().t;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(y.b,{children:[Object(F.jsx)(j.Ib,{children:x("%asset% Deposited",{asset:null===(t=u[B.a.CURRENCY_A])||void 0===t?void 0:t.symbol})}),Object(F.jsxs)(y.c,{children:[Object(F.jsx)(f.a,{currency:u[B.a.CURRENCY_A],style:{marginRight:"8px"}}),Object(F.jsx)(j.Ib,{children:null===(n=b[B.a.CURRENCY_A])||void 0===n?void 0:n.toSignificant(6)})]})]}),Object(F.jsxs)(y.b,{children:[Object(F.jsx)(j.Ib,{children:x("%asset% Deposited",{asset:null===(i=u[B.a.CURRENCY_B])||void 0===i?void 0:i.symbol})}),Object(F.jsxs)(y.c,{children:[Object(F.jsx)(f.a,{currency:u[B.a.CURRENCY_B],style:{marginRight:"8px"}}),Object(F.jsx)(j.Ib,{children:null===(c=b[B.a.CURRENCY_B])||void 0===c?void 0:c.toSignificant(6)})]})]}),Object(F.jsxs)(y.b,{children:[Object(F.jsx)(j.Ib,{children:x("Rates")}),Object(F.jsx)(j.Ib,{children:"1 ".concat(null===(a=u[B.a.CURRENCY_A])||void 0===a?void 0:a.symbol," = ").concat(null===d||void 0===d?void 0:d.toSignificant(4)," ").concat(null===(o=u[B.a.CURRENCY_B])||void 0===o?void 0:o.symbol)})]}),Object(F.jsx)(y.b,{style:{justifyContent:"flex-end"},children:Object(F.jsx)(j.Ib,{children:"1 ".concat(null===(r=u[B.a.CURRENCY_B])||void 0===r?void 0:r.symbol," = ").concat(null===d||void 0===d?void 0:d.invert().toSignificant(4)," ").concat(null===(l=u[B.a.CURRENCY_A])||void 0===l?void 0:l.symbol)})}),Object(F.jsxs)(y.b,{children:[Object(F.jsxs)(j.Ib,{children:[x("Share of Pool"),":"]}),Object(F.jsxs)(j.Ib,{children:[s?"100":null===O||void 0===O?void 0:O.toSignificant(4),"%"]})]}),Object(F.jsx)(j.p,{onClick:v,mt:"20px",children:x(s?"Create Pool & Supply":"Confirm Supply")})]})},W=n(748);var H=function(e){var t,n,i,c,a,o,r,l,s,d,u,b,O=e.currencies,v=e.noLiquidity,x=e.poolTokenPercentage,C=e.price,R=Object(p.b)().t;return Object(F.jsx)(h.a,{gap:"md",children:Object(F.jsxs)(y.a,{justify:"space-between",children:[Object(F.jsxs)(h.a,{justify:"start",children:[Object(F.jsx)(j.Ib,{fontSize:"14px",color:"primaryBright",children:null!==(t=null===C||void 0===C?void 0:C.toSignificant(6))&&void 0!==t?t:"-"}),Object(F.jsxs)(j.Ib,{fontSize:"12px",pt:1,children:[R("%assetA%",{assetA:null!==(n=null===(i=O[B.a.CURRENCY_B])||void 0===i?void 0:i.symbol)&&void 0!==n?n:""}),Object(F.jsx)(j.Cb,{color:"textSubtle",children:R(" per ")}),R("%assetB%",{assetB:null!==(c=null===(a=O[B.a.CURRENCY_A])||void 0===a?void 0:a.symbol)&&void 0!==c?c:""})]})]}),Object(F.jsxs)(h.a,{justify:"center",children:[Object(F.jsx)(j.Ib,{fontSize:"14px",color:"primaryBright",children:null!==(o=null===C||void 0===C||null===(r=C.invert())||void 0===r?void 0:r.toSignificant(6))&&void 0!==o?o:"-"}),Object(F.jsxs)(j.Ib,{fontSize:"12px",pt:1,children:[R("%assetA%",{assetA:null!==(l=null===(s=O[B.a.CURRENCY_A])||void 0===s?void 0:s.symbol)&&void 0!==l?l:""}),Object(F.jsx)(j.Cb,{color:"textSubtle",children:R(" per ")}),R("%assetB%",{assetB:null!==(d=null===(u=O[B.a.CURRENCY_B])||void 0===u?void 0:u.symbol)&&void 0!==d?d:""})]})]}),Object(F.jsxs)(h.a,{justify:"end",children:[Object(F.jsxs)(j.Ib,{fontSize:"14px",color:"primaryBright",children:[v&&C?"100":null!==(b=(null===x||void 0===x?void 0:x.lessThan(E.o))?"<0.01":null===x||void 0===x?void 0:x.toFixed(2))&&void 0!==b?b:"0","%"]}),Object(F.jsx)(j.Ib,{fontSize:"12px",pt:1,children:R("Share of Pool")})]})]})})},K=n(762);function X(e){var t,n,i,X,J,$,Q,Z,ee,te,ne,ie,ce,ae,oe,re=e.match.params,le=re.currencyIdA,se=re.currencyIdB,de=e.history,ue=Object(v.a)(),be=ue.account,je=ue.chainId,Oe=ue.library,pe=Object(p.b)().t,ve=Object(M.e)(),xe=Object(_.c)(le),he=Object(_.c)(se),Ce=(Boolean(je&&(xe&&Object(b.m)(xe,b.l[je])||he&&Object(b.m)(he,b.l[je]))),Object(M.g)()),Re=D(),fe=Re.independentField,me=Re.typedValue,ye=Re.otherTypedValue,Ne=function(e,t){var n,i,c,a,o,r,u=Object(v.a)(),j=u.account,O=u.chainId,p=D(),x=p.independentField,h=p.typedValue,C=p.otherTypedValue,R=x===B.a.CURRENCY_A?B.a.CURRENCY_B:B.a.CURRENCY_A,f=Object(d.useMemo)((function(){var n;return n={},Object(l.a)(n,B.a.CURRENCY_A,null!==e&&void 0!==e?e:void 0),Object(l.a)(n,B.a.CURRENCY_B,null!==t&&void 0!==t?t:void 0),n}),[e,t]),m=Object(U.b)(f[B.a.CURRENCY_A],f[B.a.CURRENCY_B]),y=Object(s.a)(m,2),N=y[0],g=y[1],E=Object(w.a)(null===g||void 0===g?void 0:g.liquidityToken),_=N===U.a.NOT_EXISTS||Boolean(E&&b.e.equal(E.raw,T)),A=Object(P.c)(null!==j&&void 0!==j?j:void 0,[f[B.a.CURRENCY_A],f[B.a.CURRENCY_B]]),Y=(n={},Object(l.a)(n,B.a.CURRENCY_A,A[0]),Object(l.a)(n,B.a.CURRENCY_B,A[1]),n),I=Object(S.a)(h,f[x]),q=Object(d.useMemo)((function(){if(_)return C&&f[R]?Object(S.a)(C,f[R]):void 0;if(I){var n=Object(k.c)(I,O),i=[Object(k.b)(e,O),Object(k.b)(t,O)],c=i[0],a=i[1];if(c&&a&&n&&g){var o=R===B.a.CURRENCY_B?t:e,r=R===B.a.CURRENCY_B?g.priceOf(c).quote(n):g.priceOf(a).quote(n);return o===b.d?b.c.ether(r.raw):r}}}),[_,C,f,R,I,e,O,t,g]),M=Object(d.useMemo)((function(){var e;return e={},Object(l.a)(e,B.a.CURRENCY_A,x===B.a.CURRENCY_A?I:q),Object(l.a)(e,B.a.CURRENCY_B,x===B.a.CURRENCY_A?q:I),e}),[q,I,x]),V=Object(d.useMemo)((function(){if(_){var t=M[B.a.CURRENCY_A],n=M[B.a.CURRENCY_B];return t&&n?new b.h(t.currency,n.currency,t.raw,n.raw):void 0}var i=Object(k.b)(e,O);return g&&i?g.priceOf(i):void 0}),[O,e,_,g,M]),z=Object(d.useMemo)((function(){var e=M[B.a.CURRENCY_A],t=M[B.a.CURRENCY_B],n=[Object(k.c)(e,O),Object(k.c)(t,O)],i=n[0],c=n[1];if(g&&E&&i&&c)return g.getLiquidityMinted(E,i,c)}),[M,O,g,E]),L=Object(d.useMemo)((function(){if(z&&E)return new b.g(z.raw,E.add(z).raw)}),[z,E]);j||(a="Connect Wallet"),N===U.a.INVALID&&(a=null!==(o=a)&&void 0!==o?o:"Invalid pair"),M[B.a.CURRENCY_A]&&M[B.a.CURRENCY_B]||(a=null!==(r=a)&&void 0!==r?r:"Enter an amount");var F,G,W=M[B.a.CURRENCY_A],H=M[B.a.CURRENCY_B];return W&&(null===Y||void 0===Y||null===(i=Y[B.a.CURRENCY_A])||void 0===i?void 0:i.lessThan(W))&&(a="Insufficient ".concat(null===(F=f[B.a.CURRENCY_A])||void 0===F?void 0:F.symbol," balance")),H&&(null===Y||void 0===Y||null===(c=Y[B.a.CURRENCY_B])||void 0===c?void 0:c.lessThan(H))&&(a="Insufficient ".concat(null===(G=f[B.a.CURRENCY_B])||void 0===G?void 0:G.symbol," balance")),{dependentField:R,currencies:f,pair:g,pairState:N,currencyBalances:Y,parsedAmounts:M,price:V,noLiquidity:_,liquidityMinted:z,poolTokenPercentage:L,error:a}}(null!==xe&&void 0!==xe?xe:void 0,null!==he&&void 0!==he?he:void 0),ge=Ne.dependentField,Ee=Ne.currencies,Ue=Ne.pair,_e=Ne.pairState,Ae=Ne.currencyBalances,Ye=Ne.parsedAmounts,Be=Ne.price,Ie=Ne.noLiquidity,we=Ne.liquidityMinted,ke=Ne.poolTokenPercentage,Se=Ne.error,Pe=function(e){var t=Object(I.b)();return{onFieldAInput:Object(d.useCallback)((function(n){t(Object(B.c)({field:B.a.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),onFieldBInput:Object(d.useCallback)((function(n){t(Object(B.c)({field:B.a.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e])}}(Ie),Te=Pe.onFieldAInput,De=Pe.onFieldBInput,qe=!Se,Me=Object(d.useState)(!1),Ve=Object(s.a)(Me,2),ze=Ve[0],Le=Ve[1],Fe=Object(Y.a)(),Ge=Object(M.n)(),We=Object(s.a)(Ge,1)[0],He=Object(d.useState)(""),Ke=Object(s.a)(He,2),Xe=Ke[0],Je=Ke[1],$e=(i={},Object(l.a)(i,fe,me),Object(l.a)(i,ge,Ie?ye:null!==(t=null===(n=Ye[ge])||void 0===n?void 0:n.toSignificant(6))&&void 0!==t?t:""),i),Qe=[B.a.CURRENCY_A,B.a.CURRENCY_B].reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(l.a)({},t,z(Ae[t])))}),{}),Ze=[B.a.CURRENCY_A,B.a.CURRENCY_B].reduce((function(e,t){var n,i;return Object(r.a)(Object(r.a)({},e),{},Object(l.a)({},t,null===(n=Qe[t])||void 0===n?void 0:n.equalTo(null!==(i=Ye[t])&&void 0!==i?i:"0")))}),{}),et=Object(A.b)(Ye[B.a.CURRENCY_A],E.r),tt=Object(s.a)(et,2),nt=tt[0],it=tt[1],ct=Object(A.b)(Ye[B.a.CURRENCY_B],E.r),at=Object(s.a)(ct,2),ot=at[0],rt=at[1],lt=Object(q.c)();function st(){return dt.apply(this,arguments)}function dt(){return(dt=Object(o.a)(c.a.mark((function e(){var t,n,i,o,s,d,j,O,p,v,x,h,C,R,f,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je&&Oe&&be){e.next=2;break}return e.abrupt("return");case 2:if(n=Object(V.g)(je,Oe,be),i=Ye[B.a.CURRENCY_A],o=Ye[B.a.CURRENCY_B],i&&o&&xe&&he&&Fe){e.next=6;break}return e.abrupt("return");case 6:return t={},Object(l.a)(t,B.a.CURRENCY_A,Object(V.c)(i,Ie?0:We)[0]),Object(l.a)(t,B.a.CURRENCY_B,Object(V.c)(o,Ie?0:We)[0]),s=t,xe===b.d||he===b.d?(h=he===b.d,d=n.estimateGas.addLiquidityETH,j=n.addLiquidityETH,O=[null!==(v=null===(x=Object(k.b)(h?xe:he,je))||void 0===x?void 0:x.address)&&void 0!==v?v:"",(h?i:o).raw.toString(),s[h?B.a.CURRENCY_A:B.a.CURRENCY_B].toString(),s[h?B.a.CURRENCY_B:B.a.CURRENCY_A].toString(),be,Fe.toHexString()],p=u.a.from((h?o:i).raw.toString())):(d=n.estimateGas.addLiquidity,j=n.addLiquidity,O=[null!==(C=null===(R=Object(k.b)(xe,je))||void 0===R?void 0:R.address)&&void 0!==C?C:"",null!==(f=null===(m=Object(k.b)(he,je))||void 0===m?void 0:m.address)&&void 0!==f?f:"",i.raw.toString(),o.raw.toString(),s[B.a.CURRENCY_A].toString(),s[B.a.CURRENCY_B].toString(),be,Fe.toHexString()],p=null),Le(!0),e.next=11,d.apply(void 0,Object(a.a)(O).concat([p?{value:p}:{}])).then((function(e){return j.apply(void 0,Object(a.a)(O).concat([Object(r.a)(Object(r.a)({},p?{value:p}:{}),{},{gasLimit:Object(V.b)(e),gasPrice:ve})])).then((function(e){var t,n,i,c;Le(!1),lt(e,{summary:"Add ".concat(null===(t=Ye[B.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===(n=Ee[B.a.CURRENCY_A])||void 0===n?void 0:n.symbol," and ").concat(null===(i=Ye[B.a.CURRENCY_B])||void 0===i?void 0:i.toSignificant(3)," ").concat(null===(c=Ee[B.a.CURRENCY_B])||void 0===c?void 0:c.symbol)}),Je(e.hash)}))})).catch((function(e){Le(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ut=function(){var e,t,n,i;return Ie?Object(F.jsxs)(j.P,{alignItems:"center",children:[Object(F.jsx)(j.Ib,{fontSize:"48px",marginRight:"10px",children:"".concat(null===(e=Ee[B.a.CURRENCY_A])||void 0===e?void 0:e.symbol,"/").concat(null===(t=Ee[B.a.CURRENCY_B])||void 0===t?void 0:t.symbol)}),Object(F.jsx)(f.b,{currency0:Ee[B.a.CURRENCY_A],currency1:Ee[B.a.CURRENCY_B],size:30})]}):Object(F.jsxs)(h.a,{children:[Object(F.jsxs)(j.P,{alignItems:"center",children:[Object(F.jsx)(j.Ib,{fontSize:"48px",marginRight:"10px",children:null===we||void 0===we?void 0:we.toSignificant(6)}),Object(F.jsx)(f.b,{currency0:Ee[B.a.CURRENCY_A],currency1:Ee[B.a.CURRENCY_B],size:30})]}),Object(F.jsx)(y.d,{children:Object(F.jsx)(j.Ib,{fontSize:"24px",children:"".concat(null===(n=Ee[B.a.CURRENCY_A])||void 0===n?void 0:n.symbol,"/").concat(null===(i=Ee[B.a.CURRENCY_B])||void 0===i?void 0:i.symbol," Pool Tokens")})}),Object(F.jsx)(j.Ib,{small:!0,textAlign:"left",my:"24px",children:pe("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:We/100})})]})},bt=function(){return Object(F.jsx)(G,{price:Be,currencies:Ee,parsedAmounts:Ye,noLiquidity:Ie,onAdd:st,poolTokenPercentage:ke})},jt=pe("Supplying %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(X=null===(J=Ye[B.a.CURRENCY_A])||void 0===J?void 0:J.toSignificant(6))&&void 0!==X?X:"",symbolA:null!==($=null===(Q=Ee[B.a.CURRENCY_A])||void 0===Q?void 0:Q.symbol)&&void 0!==$?$:"",amountB:null!==(Z=null===(ee=Ye[B.a.CURRENCY_B])||void 0===ee?void 0:ee.toSignificant(6))&&void 0!==Z?Z:"",symbolB:null!==(te=null===(ne=Ee[B.a.CURRENCY_B])||void 0===ne?void 0:ne.symbol)&&void 0!==te?te:""}),Ot=Object(d.useCallback)((function(e){var t=Object(W.a)(e);t===se?de.push("/add/".concat(se,"/").concat(le)):de.push("/add/".concat(t,"/").concat(se))}),[se,de,le]),pt=Object(d.useCallback)((function(e){var t=Object(W.a)(e);le===t?se?de.push("/add/".concat(se,"/").concat(t)):de.push("/add/".concat(t)):de.push("/add/".concat(le||"BNB","/").concat(t))}),[le,de,se]),vt=Object(d.useCallback)((function(){Xe&&Te(""),Je("")}),[Te,Xe]),xt=Object(O.a)(null===Ee||void 0===Ee?void 0:Ee.CURRENCY_A,null===Ee||void 0===Ee?void 0:Ee.CURRENCY_B),ht=Object(j.cc)(Object(F.jsx)(C.b,{title:pe(Ie?"You are creating a pool":"You will receive"),customOnDismiss:vt,attemptingTxn:ze,hash:Xe,content:function(){return Object(F.jsx)(C.a,{topContent:ut,bottomContent:bt})},pendingText:jt,currencyToAdd:null===Ue||void 0===Ue?void 0:Ue.liquidityToken}),!0,!0,"addLiquidityModal"),Ct=Object(s.a)(ht,1)[0];return Object(F.jsx)(K.a,{children:Object(F.jsxs)(m.a,{children:[Object(F.jsx)("div",{style:{marginRight:"16px"},children:Object(F.jsx)(g.a,{backTo:"/pool"})}),Object(F.jsx)(j.v,{opacity:.6}),Object(F.jsx)(m.b,{title:pe("Add Liquidity"),subtitle:pe("Add liquidity to receive LP tokens"),helper:pe("Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool.")}),Object(F.jsx)(j.u,{children:Object(F.jsxs)(h.a,{gap:"20px",children:[Ie&&Object(F.jsx)(h.b,{children:Object(F.jsx)(j.db,{variant:"warning",children:Object(F.jsxs)("div",{children:[Object(F.jsx)(j.Ib,{bold:!0,mb:"8px",children:pe("You are the first liquidity provider.")}),Object(F.jsx)(j.Ib,{mb:"8px",children:pe("The ratio of tokens you add will set the price of this pool.")}),Object(F.jsx)(j.Ib,{children:pe("Once you are happy with the rate click supply to review.")})]})})}),Object(F.jsx)(R.a,{value:$e[B.a.CURRENCY_A],onUserInput:Te,onMax:function(){var e,t;Te(null!==(e=null===(t=Qe[B.a.CURRENCY_A])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},onCurrencySelect:Ot,showMaxButton:!Ze[B.a.CURRENCY_A],currency:Ee[B.a.CURRENCY_A],id:"add-liquidity-input-tokena",showCommonBases:!0}),Object(F.jsx)(h.b,{children:Object(F.jsx)(j.a,{width:"24px"})}),Object(F.jsx)(R.a,{value:$e[B.a.CURRENCY_B],onUserInput:De,onCurrencySelect:pt,onMax:function(){var e,t;De(null!==(e=null===(t=Qe[B.a.CURRENCY_B])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},showMaxButton:!Ze[B.a.CURRENCY_B],currency:Ee[B.a.CURRENCY_B],id:"add-liquidity-input-tokenb",showCommonBases:!0}),Ee[B.a.CURRENCY_A]&&Ee[B.a.CURRENCY_B]&&_e!==U.a.INVALID&&Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(x.a,{padding:"20px 0px 0px 0px",borderRadius:"20px",children:[Object(F.jsx)(y.b,{children:Object(F.jsx)(j.Ib,{fontSize:"14px",color:"textSubtle",children:pe(Ie?"Initial prices and pool share":"Prices and pool share")})})," ",Object(F.jsx)(x.a,{padding:"20px 0px",borderRadius:"20px",children:Object(F.jsx)(H,{currencies:Ee,poolTokenPercentage:ke,noLiquidity:Ie,price:Be})})]})}),xt?Object(F.jsx)(j.p,{disabled:!0,mb:"4px",children:pe("Unsupported Asset")}):be?Object(F.jsxs)(h.a,{gap:"md",children:[(nt===A.a.NOT_APPROVED||nt===A.a.PENDING||ot===A.a.NOT_APPROVED||ot===A.a.PENDING)&&qe&&Object(F.jsxs)(y.b,{children:[nt!==A.a.APPROVED&&Object(F.jsx)(j.p,{onClick:it,disabled:nt===A.a.PENDING,width:ot!==A.a.APPROVED?"48%":"100%",children:nt===A.a.PENDING?Object(F.jsx)(L.a,{children:pe("Enabling %asset%",{asset:null===(ie=Ee[B.a.CURRENCY_A])||void 0===ie?void 0:ie.symbol})}):pe("Enable %asset%",{asset:null===(ce=Ee[B.a.CURRENCY_A])||void 0===ce?void 0:ce.symbol})}),ot!==A.a.APPROVED&&Object(F.jsx)(j.p,{onClick:rt,disabled:ot===A.a.PENDING,width:nt!==A.a.APPROVED?"48%":"100%",children:ot===A.a.PENDING?Object(F.jsx)(L.a,{children:pe("Enabling %asset%",{asset:null===(ae=Ee[B.a.CURRENCY_B])||void 0===ae?void 0:ae.symbol})}):pe("Enable %asset%",{asset:null===(oe=Ee[B.a.CURRENCY_B])||void 0===oe?void 0:oe.symbol})})]}),Object(F.jsx)(j.p,{variant:!qe&&Ye[B.a.CURRENCY_A]&&Ye[B.a.CURRENCY_B]?"danger":"primary",onClick:function(){Ce?st():Ct()},disabled:!qe||nt!==A.a.APPROVED||ot!==A.a.APPROVED,children:null!==Se&&void 0!==Se?Se:pe("Supply")})]}):Object(F.jsx)(N.a,{})]})})]})})}},785:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var i,c,a,o=n(13),r=n(1),l=n(6),s=n(2),d=n(167),u=n(16),b=n(29),j=n(117),O=n(737),p=n(738),v=n(47),x=n(0),h=l.e.div(i||(i=Object(o.a)(["\n  width: 100%;\n"]))),C=Object(l.e)(p.a)(c||(c=Object(o.a)(["\n  padding: 24px;\n"]))),R=Object(l.e)(p.b)(a||(a=Object(o.a)(["\n  padding: 24px 0;\n"])));function f(e){var t=e.pendingText,n=Object(u.b)().t;return Object(x.jsxs)(h,{children:[Object(x.jsx)(R,{children:Object(x.jsx)(s.Db,{})}),Object(x.jsxs)(p.a,{gap:"12px",justify:"center",children:[Object(x.jsx)(s.Ib,{fontSize:"20px",children:n("Waiting For Confirmation")}),Object(x.jsx)(p.a,{gap:"12px",justify:"center",children:Object(x.jsx)(s.Ib,{bold:!0,small:!0,textAlign:"center",children:t})}),Object(x.jsx)(s.Ib,{small:!0,color:"textSubtle",textAlign:"center",children:n("Confirm this transaction in your wallet")})]})]})}function m(e){var t,n=e.onDismiss,i=e.chainId,c=e.hash,a=e.currencyToAdd,o=Object(b.a)().library,r=Object(u.b)().t,l=Object(j.b)(a,i);return Object(x.jsx)(h,{children:Object(x.jsxs)(C,{children:[Object(x.jsx)(R,{children:Object(x.jsx)(s.h,{strokeWidth:.5,width:"90px",color:"primary"})}),Object(x.jsxs)(p.a,{gap:"12px",justify:"center",children:[Object(x.jsx)(s.Ib,{fontSize:"20px",children:r("Transaction Submitted")}),i&&c&&Object(x.jsx)(s.X,{external:!0,small:!0,href:Object(v.e)(c,"transaction",i),children:r("View on BscScan")}),a&&(null===o||void 0===o||null===(t=o.provider)||void 0===t?void 0:t.isMetaMask)&&Object(x.jsx)(s.p,{variant:"tertiary",mt:"12px",width:"fit-content",onClick:function(){return Object(d.a)(l.address,l.symbol,l.decimals)},children:Object(x.jsxs)(O.c,{children:[r("Add %asset% to Metamask",{asset:a.symbol}),Object(x.jsx)(s.eb,{width:"16px",ml:"6px"})]})}),Object(x.jsx)(s.p,{onClick:n,mt:"20px",children:r("Close")})]})]})})}function y(e){var t=e.bottomContent,n=e.topContent;return Object(x.jsxs)(h,{children:[Object(x.jsx)(s.m,{children:n()}),Object(x.jsx)(s.m,{children:t()})]})}t.b=function(e){var t=e.title,n=e.onDismiss,i=e.customOnDismiss,c=e.attemptingTxn,a=e.hash,o=e.pendingText,l=e.content,d=e.currencyToAdd,u=Object(b.a)().chainId,j=Object(r.useCallback)((function(){i&&i(),n()}),[i,n]);return u?Object(x.jsx)(s.gb,{title:t,headerBackground:"gradients.cardHeader",onDismiss:j,children:c?Object(x.jsx)(f,{pendingText:o}):a?Object(x.jsx)(m,{chainId:u,hash:a,onDismiss:n,currencyToAdd:d}):l()}):null}},786:function(e,t,n){"use strict";var i,c=n(13),a=(n(1),n(6)),o=n(65),r=n(116),l=n(2),s=n(16),d=n(737),u=n(0),b=a.e.nav(i||(i=Object(c.a)(["\n  margin-bottom: 10px;\n  text-align: right;\n  padding: 10px 0px;\n"]))),j=function(e){return e.includes("/pool")||e.includes("/create")||e.includes("/add")||e.includes("/remove")||e.includes("/find")||e.includes("/liquidity")?1:0};t.a=function(e){var t=e.backTo,n=Object(o.f)(),i=Object(s.b)().t;return Object(u.jsx)(b,{children:Object(u.jsxs)(d.b,{children:[Object(u.jsx)(l.P,{alignItems:"center",children:t&&Object(u.jsx)(l.T,{as:r.b,to:t,scale:"sm",children:Object(u.jsx)(l.c,{width:"20px"})})}),Object(u.jsxs)(l.q,{activeIndex:j(n.pathname),scale:"sm",variant:"subtle",children:[Object(u.jsx)(l.r,{id:"swap-nav-link",to:"/swap",as:r.b,children:i("Swap")}),Object(u.jsx)(l.r,{id:"pool-nav-link",to:"/pool",as:r.b,children:i("Liquidity")})]})]})})}},820:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var i,c,a,o,r,l,s=n(11),d=n(13),u=n(1),b=n.n(u),j=n(2),O=n(6),p=n(16),v=n(29),x=n(322),h=n(816),C=n(739),R=n(737),f=n(5),m=n(61),y=n(47),N=n(0),g=["value","onUserInput","placeholder"],E=O.e.input(i||(i=Object(d.a)(["\n  color: ",";\n  width: 0;\n  position: relative;\n  font-weight: 600;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 18px;\n  text-align: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){var t=e.error,n=e.theme;return t?n.colors.failure:n.colors.text}),(function(e){var t=e.align;return t&&t}),(function(e){return e.theme.colors.text})),U=RegExp("^\\d*(?:\\\\[.])?\\d*$"),_=b.a.memo((function(e){var t=e.value,n=e.onUserInput,i=e.placeholder,c=Object(m.a)(e,g),a=Object(p.b)().t;return Object(N.jsx)(E,Object(f.a)(Object(f.a)({},c),{},{value:t,onChange:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||U.test(Object(y.d)(t)))&&n(t)},inputMode:"decimal",title:a("Token Amount"),autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:i||"0.0",minLength:1,maxLength:79,spellCheck:"false"}))})),A=O.e.div(c||(c=Object(d.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ",";\n"])),(function(e){return e.selected?"0.75rem 0.5rem 0.75rem 1rem":"0.75rem 0.75rem 0.75rem 1rem"})),Y=Object(O.e)(j.p).attrs({variant:"text",scale:"sm"})(a||(a=Object(d.a)(["\n  padding: 0 0.5rem;\n"]))),B=O.e.div(o||(o=Object(d.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n"])),(function(e){return e.theme.colors.textSubtle})),I=O.e.div(r||(r=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ",";\n  background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.hideInput?"8px":"20px"}),(function(e){return e.theme.colors.background})),w=O.e.div(l||(l=Object(d.a)(["\n  border-radius: 24px;\n  padding-inline: 15px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.shadows.inset}));function k(e){var t,n=e.value,i=e.onUserInput,c=e.onMax,a=e.showMaxButton,o=e.label,r=e.onCurrencySelect,l=e.currency,d=e.disableCurrencySelect,u=void 0!==d&&d,b=e.hideBalance,O=void 0!==b&&b,f=e.pair,m=void 0===f?null:f,y=e.hideInput,g=void 0!==y&&y,E=e.otherCurrency,U=e.id,k=e.showCommonBases,S=Object(v.a)().account,P=Object(x.b)(null!==S&&void 0!==S?S:void 0,null!==l&&void 0!==l?l:void 0),T=Object(p.b)().t,D=o||T("Input"),q=Object(j.cc)(Object(N.jsx)(h.a,{onCurrencySelect:r,selectedCurrency:l,otherSelectedCurrency:E,showCommonBases:k})),M=Object(s.a)(q,1)[0];return Object(N.jsx)(I,{id:U,children:Object(N.jsxs)(w,{hideInput:g,children:[!g&&Object(N.jsx)(B,{children:Object(N.jsxs)(R.b,{children:[Object(N.jsx)(j.Ib,{fontSize:"14px",color:"#718096",children:D}),S&&(!O&&l&&P?Object(N.jsxs)(j.Ib,{fontSize:"14px",color:"#718096",style:{display:"inline"},children:["Balance ",Object(N.jsx)("span",{style:{color:"#1ac486",fontSize:"16px",fontWeight:600},children:T("%amount%",{amount:null!==(t=null===P||void 0===P?void 0:P.toSignificant(6))&&void 0!==t?t:""})})]}):Object(N.jsx)(j.Ib,{fontSize:"16px",style:{display:"inline",color:"#1ac486",fontWeight:600},children:" -"}))]})}),Object(N.jsxs)(A,{style:g?{padding:"0",borderRadius:"8px"}:{},selected:u,children:[!g&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{className:"token-amount-input",value:n,onUserInput:function(e){i(e)}}),S&&l&&a&&"To"!==o&&Object(N.jsx)(j.p,{onClick:c,scale:"sm",variant:"text",children:"MAX"})]}),Object(N.jsx)(Y,{selected:!!l,className:"open-currency-select-button",onClick:function(){u||M()},children:Object(N.jsxs)(j.P,{alignItems:"center",justifyContent:"space-between",children:[m?Object(N.jsx)(C.b,{currency0:m.token0,currency1:m.token1,size:16,margin:!0}):l?Object(N.jsx)(C.a,{currency:l,size:"24px",style:{marginRight:"8px"}}):null,m?Object(N.jsxs)(j.Ib,{id:"pair",children:[null===m||void 0===m?void 0:m.token0.symbol,":",null===m||void 0===m?void 0:m.token1.symbol]}):Object(N.jsx)(j.Ib,{id:"pair",children:(l&&l.symbol&&l.symbol.length>20?"".concat(l.symbol.slice(0,4),"...").concat(l.symbol.slice(l.symbol.length-5,l.symbol.length)):null===l||void 0===l?void 0:l.symbol)||T("Select a currency")}),!u&&Object(N.jsx)(j.D,{})]})})]})]})})}},821:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return x}));var i=n(3),c=n.n(i),a=n(9),o=n(127),r=n(10),l=n(1),s=n(29),d=(n(51),n(50)),u=n(70);var b,j=function(e,t,n){var i=Object(d.m)(null===e||void 0===e?void 0:e.address,!1),c=Object(l.useMemo)((function(){return[t,n]}),[t,n]),a=Object(u.c)(i,"allowance",c).result;return Object(l.useMemo)((function(){return e&&a?new r.j(e,a.toString()):void 0}),[e,a])},O=(n(35),n(328)),p=(n(337),n(47)),v=n(181);function x(e,t){var n=Object(s.a)().account,i=Object(v.a)().callWithGasPrice,u=e instanceof r.j?e.token:void 0,x=j(u,null!==n&&void 0!==n?n:void 0,t),h=Object(O.b)(null===u||void 0===u?void 0:u.address,t),C=Object(l.useMemo)((function(){return e&&t?e.currency===r.d?b.APPROVED:x?x.lessThan(e)?h?b.PENDING:b.NOT_APPROVED:b.APPROVED:b.UNKNOWN:b.UNKNOWN}),[e,x,h,t]),R=Object(d.m)(null===u||void 0===u?void 0:u.address),f=Object(O.c)(),m=Object(l.useCallback)(Object(a.a)(c.a.mark((function n(){var a,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(C===b.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:if(u){n.next=6;break}return console.error("no token"),n.abrupt("return");case 6:if(R){n.next=9;break}return console.error("tokenContract is null"),n.abrupt("return");case 9:if(e){n.next=12;break}return console.error("missing amount to approve"),n.abrupt("return");case 12:if(t){n.next=15;break}return console.error("no spender"),n.abrupt("return");case 15:return a=!1,n.next=18,R.estimateGas.approve(t,o.b).catch((function(){return a=!0,R.estimateGas.approve(t,e.raw.toString())}));case 18:return r=n.sent,n.abrupt("return",i(R,"approve",[t,a?e.raw.toString():o.b],{gasLimit:Object(p.b)(r)}).then((function(n){f(n,{summary:"Approve ".concat(e.currency.symbol),approval:{tokenAddress:u.address,spender:t}})})).catch((function(e){throw console.error("Failed to approve token",e),e})));case 20:case"end":return n.stop()}}),n)}))),[C,u,R,e,t,f,i]);return[C,m]}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(b||(b={}))},822:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(1),c=n(30),a=n(70),o=n(50);function r(){var e=Object(c.c)((function(e){return e.user.userDeadline})),t=function(){var e,t,n=Object(o.j)();return null===(e=Object(a.c)(n,"getCurrentBlockTimestamp"))||void 0===e||null===(t=e.result)||void 0===t?void 0:t[0]}();return Object(i.useMemo)((function(){if(t&&e)return t.add(e)}),[t,e])}}}]);
//# sourceMappingURL=8.335b1787.chunk.js.map
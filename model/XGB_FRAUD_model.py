import math
def sigmoid(x):
    if x < 0.0:
        z = math.exp(x)
        return z / (1.0 + z)
    return 1.0 / (1.0 + math.exp(-x))
def score(input):
    if input[5] < 0.048819296:
        if input[2] < 1.1323689:
            if input[1] < 0.3337534:
                if input[8] < -0.006835503:
                    var0 = 0.95478594
                else:
                    var0 = 0.430229
            else:
                if input[6] < 0.12365488:
                    var0 = -0.23613596
                else:
                    var0 = 0.6
        else:
            if input[8] < -0.006835564:
                if input[1] < 1.5712967:
                    var0 = 0.63265306
                else:
                    var0 = -0.7307692
            else:
                if input[4] < -0.24758567:
                    var0 = -0.9574468
                else:
                    var0 = -0.50282484
    else:
        if input[5] < 1.058887:
            if input[6] < 1.34:
                if input[5] < 0.32726663:
                    var0 = -0.36397058
                else:
                    var0 = -0.6878147
            else:
                if input[1] < 0.0015661381:
                    var0 = 0.8333333
                else:
                    var0 = -0.5263158
        else:
            if input[8] < -0.0018464483:
                if input[6] < 0.9809406:
                    var0 = -0.8095238
                else:
                    var0 = -0.9935233
            else:
                if input[2] < 0.023945602:
                    var0 = 0.73913044
                else:
                    var0 = -0.8888889
    if input[13] < 0.22608225:
        if input[7] < -0.2406651:
            if input[5] < 0.048819296:
                if input[8] < -0.0065756403:
                    var1 = -1.1582345
                else:
                    var1 = 0.21391326
            else:
                var1 = -0.7671127
        else:
            if input[8] < -0.006835495:
                if input[5] < -0.10885801:
                    var1 = -0.35184518
                else:
                    var1 = -0.69487774
            else:
                var1 = -0.79304725
    else:
        if input[13] < 0.6978998:
            if input[8] < -0.006835454:
                if input[9] < 1.2350575:
                    var1 = 0.7425021
                else:
                    var1 = 0.09669638
            else:
                if input[7] < 0.23935755:
                    var1 = 0.43875486
                else:
                    var1 = -0.45945546
        else:
            if input[3] < 2.4903069:
                if input[13] < 1.2388383:
                    var1 = 0.32644963
                else:
                    var1 = -0.30477607
            else:
                if input[8] < -0.006834383:
                    var1 = -0.38438293
                else:
                    var1 = -0.7966427
    if input[13] < 0.22608225:
        if input[10] < 2.3298361:
            if input[4] < 0.12803867:
                if input[10] < -0.41060007:
                    var2 = -0.71227974
                else:
                    var2 = -0.1974529
            else:
                var2 = -0.6011814
        else:
            if input[0] < 1.0374212:
                var2 = 1.1053661
            else:
                var2 = -0.07372043
    else:
        if input[0] < 0.7140982:
            if input[0] < 0.44505966:
                if input[10] < 2.507209:
                    var2 = 0.6060948
                else:
                    var2 = 1.080776
            else:
                if input[13] < 1.8474704:
                    var2 = 0.13447373
                else:
                    var2 = 1.0456429
        else:
            if input[0] < 1.026025:
                if input[7] < -1.2489095:
                    var2 = -0.6312708
                else:
                    var2 = -0.026747443
            else:
                if input[0] < 1.1490984:
                    var2 = -0.51674503
                else:
                    var2 = -0.76069564
    if input[5] < -0.18070339:
        if input[2] < 1.0445951:
            if input[1] < 0.034333866:
                if input[9] < -0.15212247:
                    var3 = 0.17245546
                else:
                    var3 = 0.47604245
            else:
                if input[2] < -0.17403847:
                    var3 = -0.28267017
                else:
                    var3 = 0.109165736
        else:
            if input[9] < 1.5805223:
                if input[9] < -0.7461136:
                    var3 = -0.19150004
                else:
                    var3 = -0.4762816
            else:
                if input[2] < 1.6576256:
                    var3 = 0.46805504
                else:
                    var3 = -0.36385763
    else:
        if input[5] < 1.0274051:
            if input[1] < 0.034333866:
                if input[7] < -0.010400651:
                    var3 = -0.2611108
                else:
                    var3 = 0.41568062
            else:
                if input[10] < 2.5079968:
                    var3 = -0.3899939
                else:
                    var3 = 0.090613954
        else:
            if input[5] < 1.809478:
                if input[9] < 0.56357425:
                    var3 = -0.5526732
                else:
                    var3 = -0.43722492
            else:
                if input[9] < 1.7447867:
                    var3 = -0.27929384
                else:
                    var3 = 0.33171216
    if input[0] < 0.76141316:
        if input[5] < 0.32726663:
            if input[2] < -0.17403847:
                if input[2] < -1.0049027:
                    var4 = 0.5129912
                else:
                    var4 = -0.043858774
            else:
                if input[0] < 0.32232428:
                    var4 = 0.5394406
                else:
                    var4 = 0.19932055
        else:
            if input[10] < 2.5039515:
                if input[5] < 0.96868265:
                    var4 = -0.1835623
                else:
                    var4 = -0.4837469
            else:
                if input[4] < 0.9740638:
                    var4 = -0.19179587
                else:
                    var4 = 0.70628816
    else:
        if input[0] < 1.1091319:
            if input[1] < -0.5903248:
                if input[4] < -1.3210816:
                    var4 = 0.18335986
                else:
                    var4 = -0.57676214
            else:
                if input[1] < -0.20618671:
                    var4 = 0.27366528
                else:
                    var4 = -0.23637472
        else:
            if input[5] < 1.7636012:
                if input[5] < -1.2243772:
                    var4 = -0.25310987
                else:
                    var4 = -0.601672
            else:
                var4 = 0.24552031
    if input[9] < -0.15212247:
        if input[8] < -0.006835503:
            if input[8] < -0.006842738:
                if input[2] < 0.16739047:
                    var5 = -0.6237849
                else:
                    var5 = -0.15769303
            else:
                if input[9] < -0.7461136:
                    var5 = 0.46882036
                else:
                    var5 = -0.18147363
        else:
            if input[9] < -0.7461136:
                if input[5] < 0.9470322:
                    var5 = -0.13940595
                else:
                    var5 = -0.50446254
            else:
                if input[8] < -0.0068355026:
                    var5 = -1.8034004
                else:
                    var5 = -0.45120037
    else:
        if input[9] < 1.2688061:
            if input[8] < -0.006713944:
                if input[12] < 2.101891:
                    var5 = 0.47589478
                else:
                    var5 = -0.27980137
            else:
                if input[9] < 0.56357425:
                    var5 = -0.5340713
                else:
                    var5 = 0.46857196
        else:
            if input[2] < 0.16739047:
                if input[9] < 1.7122965:
                    var5 = -0.6535485
                else:
                    var5 = 0.025311304
            else:
                if input[1] < 1.5376577:
                    var5 = 0.16252264
                else:
                    var5 = -0.33783442
    if input[0] < 0.8860029:
        if input[0] < -0.8011234:
            if input[2] < -1.0049027:
                var6 = 0.49972415
            else:
                if input[1] < -0.5903248:
                    var6 = 0.0147729805
                else:
                    var6 = -0.38741264
        else:
            if input[0] < 0.17804542:
                if input[5] < -1.2537628:
                    var6 = -0.31686583
                else:
                    var6 = 0.34948316
            else:
                if input[10] < 2.507209:
                    var6 = -0.034618326
                else:
                    var6 = 0.53140706
    else:
        if input[1] < 0.5925646:
            if input[0] < 1.1091319:
                if input[4] < -0.38390496:
                    var6 = -0.22293676
                else:
                    var6 = 0.35093284
            else:
                if input[0] < 1.1490984:
                    var6 = -0.24467716
                else:
                    var6 = -0.5735132
        else:
            if input[5] < -1.2167692:
                if input[4] < -1.3083717:
                    var6 = -0.30743065
                else:
                    var6 = 0.8562304
            else:
                if input[2] < -0.23000214:
                    var6 = 0.03340639
                else:
                    var6 = -0.49750182
    if input[0] < 0.85074407:
        if input[5] < 1.1042616:
            if input[6] < 0.186764:
                if input[5] < -0.53698564:
                    var7 = 0.1043344
                else:
                    var7 = -0.19076616
            else:
                if input[5] < -0.08411202:
                    var7 = 0.5171292
                else:
                    var7 = 0.13788655
        else:
            if input[6] < 0.9809406:
                if input[2] < -0.117333524:
                    var7 = 0.41385004
                else:
                    var7 = -0.49306533
            else:
                if input[5] < 1.809478:
                    var7 = -0.5187174
                else:
                    var7 = 0.113003105
    else:
        if input[0] < 1.1754174:
            if input[6] < 0.9809406:
                if input[5] < -1.1278162:
                    var7 = 0.06616951
                else:
                    var7 = -0.29178742
            else:
                if input[1] < 1.324422:
                    var7 = 0.56544155
                else:
                    var7 = -0.4205653
        else:
            if input[5] < -1.2243772:
                var7 = -0.16229013
            else:
                var7 = -0.51557964
    if input[9] < -0.15212247:
        if input[5] < -1.2829233:
            if input[12] < 2.101891:
                if input[9] < -0.7461136:
                    var8 = 0.4643688
                else:
                    var8 = -0.20902723
            else:
                var8 = -0.70981514
        else:
            if input[0] < 0.31125998:
                if input[0] < -1.1254526:
                    var8 = -0.3764869
                else:
                    var8 = 0.043718483
            else:
                if input[9] < -0.7461136:
                    var8 = -0.19927572
                else:
                    var8 = -0.51144016
    else:
        if input[9] < -0.15113139:
            var8 = 0.55600303
        else:
            if input[0] < 1.1625185:
                if input[6] < -1.1370107:
                    var8 = -0.22848827
                else:
                    var8 = 0.13727587
            else:
                if input[0] < 1.2413504:
                    var8 = -0.21553312
                else:
                    var8 = -0.50564384
    if input[1] < 1.8728272:
        if input[0] < 1.1091319:
            if input[2] < 0.3487683:
                if input[12] < 2.101891:
                    var9 = 0.019277522
                else:
                    var9 = -0.37095505
            else:
                if input[4] < -0.7507729:
                    var9 = -0.1931132
                else:
                    var9 = 0.23300831
        else:
            if input[8] < -0.0067273797:
                if input[8] < -0.0068541933:
                    var9 = -0.183772
                else:
                    var9 = -0.44398522
            else:
                var9 = 0.27514896
    else:
        var9 = -0.6785734
    if input[13] < 0.22608225:
        if input[10] < -0.41060007:
            var10 = -0.59242076
        else:
            if input[8] < -0.0068355044:
                var10 = 0.11556571
            else:
                var10 = 0.80489933
    else:
        if input[13] < 0.6978998:
            if input[12] < 2.101891:
                if input[8] < -0.006788869:
                    var10 = 0.44494024
                else:
                    var10 = 0.03718301
            else:
                if input[13] < 0.28920457:
                    var10 = -0.6368706
                else:
                    var10 = 0.66242725
        else:
            if input[13] < 1.7942412:
                if input[12] < 2.3678677:
                    var10 = -0.012528975
                else:
                    var10 = -0.45504236
            else:
                if input[7] < 1.5808862:
                    var10 = 0.5101377
                else:
                    var10 = -0.4096498
    if input[0] < -0.018073348:
        if input[8] < -0.006788869:
            if input[12] < 2.1113806:
                if input[0] < -1.1541007:
                    var11 = -0.12139386
                else:
                    var11 = 0.08714957
            else:
                if input[0] < -0.2638912:
                    var11 = 0.648358
                else:
                    var11 = 0.22236209
        else:
            if input[4] < 1.0151404:
                if input[0] < -0.8252662:
                    var11 = 0.1453067
                else:
                    var11 = 0.6240707
            else:
                if input[5] < 1.6040885:
                    var11 = -0.031249864
                else:
                    var11 = 0.35818642
    else:
        if input[5] < -0.05742212:
            if input[4] < -0.1578047:
                if input[5] < -1.1970136:
                    var11 = 0.22296195
                else:
                    var11 = -0.13314836
            else:
                if input[4] < 0.56848323:
                    var11 = 0.3101688
                else:
                    var11 = -0.18296714
        else:
            if input[4] < 1.0388232:
                if input[0] < 0.028297966:
                    var11 = 0.08879375
                else:
                    var11 = -0.3785942
            else:
                if input[5] < 1.004594:
                    var11 = 0.2611138
                else:
                    var11 = -0.30056673
    if input[2] < 2.024894:
        if input[9] < 1.6746632:
            if input[10] < 2.442718:
                if input[5] < -1.2243772:
                    var12 = 0.2093504
                else:
                    var12 = -0.035248876
            else:
                if input[6] < -0.92802566:
                    var12 = -0.09447349
                else:
                    var12 = -0.5792346
        else:
            if input[5] < -0.5340696:
                if input[5] < -1.2829233:
                    var12 = -0.90102994
                else:
                    var12 = 0.49865985
            else:
                if input[6] < -0.32921466:
                    var12 = -0.317179
                else:
                    var12 = 0.11436129
    else:
        if input[9] < 1.6066908:
            if input[9] < 1.40904:
                var12 = -0.3463273
            else:
                var12 = 0.024450598
        else:
            var12 = -0.6303246
    if input[8] < -0.006842738:
        if input[5] < 0.5075402:
            if input[4] < 0.3889631:
                if input[5] < -0.69705915:
                    var13 = 0.12184821
                else:
                    var13 = -0.53182507
            else:
                if input[7] < 1.1753281:
                    var13 = 0.38198808
                else:
                    var13 = -0.13599394
        else:
            var13 = -0.5626976
    else:
        if input[6] < 0.5156219:
            if input[3] < 0.9388722:
                if input[8] < -0.006805978:
                    var13 = -0.020510614
                else:
                    var13 = 0.4781245
            else:
                if input[5] < -0.755904:
                    var13 = 0.1578316
                else:
                    var13 = -0.40041167
        else:
            if input[7] < 0.30703884:
                if input[8] < -0.006835502:
                    var13 = 0.04808876
                else:
                    var13 = 0.5420329
            else:
                if input[10] < 1.9641494:
                    var13 = 0.009875023
                else:
                    var13 = 0.32685402
    if input[13] < 0.22608225:
        if input[0] < 0.047835745:
            var14 = -0.54735637
        else:
            if input[3] < -0.28603184:
                if input[0] < 0.106255814:
                    var14 = -0.05654972
                else:
                    var14 = -0.46854985
            else:
                if input[5] < -1.0302417:
                    var14 = 0.3884495
                else:
                    var14 = -0.2597025
    else:
        if input[9] < -0.7461136:
            if input[5] < -1.1059393:
                if input[7] < -0.647531:
                    var14 = 0.3542452
                else:
                    var14 = -0.23968457
            else:
                if input[13] < 0.6978998:
                    var14 = 0.56023747
                else:
                    var14 = -0.04510443
        else:
            if input[9] < -0.39408252:
                if input[0] < 0.028297966:
                    var14 = 0.3811776
                else:
                    var14 = -0.56387174
            else:
                if input[0] < 0.5702052:
                    var14 = 0.18173547
                else:
                    var14 = -0.063149065
    if input[13] < 0.22608225:
        if input[12] < 1.0223489:
            if input[8] < -0.006682934:
                var15 = -0.5342869
            else:
                var15 = -0.12908092
        else:
            if input[2] < 1.0084318:
                var15 = 0.6251952
            else:
                var15 = 0.07169156
    else:
        if input[13] < 0.6978998:
            if input[12] < 2.101891:
                if input[2] < -0.059206758:
                    var15 = 0.3898305
                else:
                    var15 = 0.13292031
            else:
                if input[13] < 0.28920457:
                    var15 = -0.4686415
                else:
                    var15 = 0.48004103
        else:
            if input[7] < -1.102105:
                if input[8] < -0.006822546:
                    var15 = -0.6030506
                else:
                    var15 = -0.13874376
            else:
                if input[1] < 1.8728272:
                    var15 = 0.047266006
                else:
                    var15 = -0.5615257
    if input[13] < 0.22608225:
        if input[12] < 1.0223489:
            if input[2] < 1.5504389:
                var16 = -0.51466733
            else:
                var16 = -0.112237066
        else:
            if input[8] < -0.006835505:
                var16 = 0.06684821
            else:
                var16 = 0.46048912
    else:
        if input[9] < -0.7461136:
            if input[12] < 1.0223489:
                if input[2] < 0.7820636:
                    var16 = 0.5127322
                else:
                    var16 = 0.10670162
            else:
                if input[8] < -0.006835564:
                    var16 = -0.025921762
                else:
                    var16 = -0.79061
        else:
            if input[9] < -0.42017102:
                if input[6] < -0.98786396:
                    var16 = 0.046786685
                else:
                    var16 = -0.48150614
            else:
                if input[2] < 1.5034567:
                    var16 = 0.040500652
                else:
                    var16 = -0.30530933
    if input[0] < 0.80133814:
        if input[1] < 0.93377477:
            if input[12] < 2.3166804:
                if input[12] < 2.1113806:
                    var17 = 0.025278488
                else:
                    var17 = 0.658362
            else:
                if input[5] < -1.1169127:
                    var17 = 0.26104715
                else:
                    var17 = -0.68096954
        else:
            if input[5] < 0.12448453:
                if input[1] < 1.8728272:
                    var17 = 0.422739
                else:
                    var17 = -0.43506387
            else:
                if input[12] < 2.3166804:
                    var17 = 0.2815305
                else:
                    var17 = -0.22978885
    else:
        if input[8] < -0.0018464483:
            if input[12] < 2.3980508:
                if input[10] < 1.1737391:
                    var17 = -0.21126021
                else:
                    var17 = 0.08340583
            else:
                var17 = -0.50711817
        else:
            var17 = 0.52980983
    if input[13] < 0.22608225:
        if input[10] < 0.76490664:
            if input[8] < -0.006788869:
                var18 = -0.5039878
            else:
                var18 = -0.1210175
        else:
            if input[7] < -1.2489095:
                var18 = 0.05148343
            else:
                var18 = 0.36572352
    else:
        if input[8] < -0.006842738:
            if input[13] < 1.8577936:
                if input[13] < 1.32584:
                    var18 = -0.20038238
                else:
                    var18 = -0.43702087
            else:
                if input[7] < 1.1753281:
                    var18 = 0.5286885
                else:
                    var18 = -0.03333195
        else:
            if input[8] < -0.0068354653:
                if input[8] < -0.0068355026:
                    var18 = -0.019914873
                else:
                    var18 = 0.19273779
            else:
                if input[4] < 0.12803867:
                    var18 = -0.14531045
                else:
                    var18 = 0.09918907
    if input[0] < 1.2413504:
        if input[0] < 0.028297966:
            if input[9] < 1.2688061:
                if input[4] < -1.1582835:
                    var19 = -0.07726933
                else:
                    var19 = 0.3113241
            else:
                if input[9] < 1.7017324:
                    var19 = -0.43504983
                else:
                    var19 = 0.26049998
        else:
            if input[9] < 1.5422175:
                if input[9] < 1.490532:
                    var19 = -0.04885345
                else:
                    var19 = -0.5275765
            else:
                if input[5] < 0.048819296:
                    var19 = 0.21672219
                else:
                    var19 = -0.11217986
    else:
        var19 = -0.45820042
    if input[13] < 0.22608225:
        if input[10] < -0.41060024:
            var20 = -0.4861519
        else:
            if input[8] < -0.0068355044:
                var20 = -0.10442645
            else:
                if input[2] < 1.0084318:
                    var20 = 0.37789452
                else:
                    var20 = 0.097536184
    else:
        if input[9] < -0.7461136:
            if input[8] < -0.0068354798:
                if input[8] < -0.006835505:
                    var20 = 0.03511656
                else:
                    var20 = 0.45125794
            else:
                if input[7] < -1.2067894:
                    var20 = 0.36991012
                else:
                    var20 = -0.22170837
        else:
            if input[2] < -0.3236507:
                if input[13] < 1.1028781:
                    var20 = 0.02618729
                else:
                    var20 = -0.6859423
            else:
                if input[2] < 1.7296573:
                    var20 = 0.054444443
                else:
                    var20 = -0.37238228
    if input[6] < 0.5156219:
        if input[5] < 0.12448453:
            if input[2] < -0.5901068:
                if input[9] < 0.7167644:
                    var21 = 0.011865427
                else:
                    var21 = -0.41411388
            else:
                if input[7] < -0.41955724:
                    var21 = 0.14593183
                else:
                    var21 = -0.056587875
        else:
            if input[2] < -0.73414433:
                if input[7] < -0.27075705:
                    var21 = 0.30120623
                else:
                    var21 = -0.37068594
            else:
                if input[7] < 0.99629587:
                    var21 = -0.39581305
                else:
                    var21 = -0.0024202552
    else:
        if input[2] < -0.62474453:
            if input[5] < 0.96868265:
                if input[9] < 1.2482135:
                    var21 = 0.1344862
                else:
                    var21 = 0.86722594
            else:
                var21 = -0.011307149
        else:
            if input[8] < -0.0068728793:
                var21 = -0.50024384
            else:
                if input[2] < 1.4131434:
                    var21 = 0.14919
                else:
                    var21 = -0.24996966
    if input[6] < -0.40789413:
        if input[6] < -0.7059275:
            if input[9] < 0.6369434:
                if input[9] < 0.070187196:
                    var22 = -0.06470833
                else:
                    var22 = -0.49039227
            else:
                if input[8] < -0.0068353303:
                    var22 = -0.049343947
                else:
                    var22 = 0.24919847
        else:
            if input[9] < 0.7167644:
                if input[9] < -0.42017102:
                    var22 = -0.11856116
                else:
                    var22 = 0.34737572
            else:
                if input[8] < -0.0068626464:
                    var22 = 0.16442995
                else:
                    var22 = -0.5229057
    else:
        if input[9] < 1.4658598:
            if input[9] < -0.22513607:
                if input[9] < -0.6062229:
                    var22 = 0.059083145
                else:
                    var22 = -0.42415088
            else:
                if input[6] < -0.07649079:
                    var22 = 0.116730414
                else:
                    var22 = 0.3483607
        else:
            if input[9] < 1.5559384:
                if input[9] < 1.490532:
                    var22 = 0.024192745
                else:
                    var22 = -0.48544255
            else:
                if input[12] < 2.3166804:
                    var22 = 0.234253
                else:
                    var22 = -0.07856734
    if input[0] < 0.028297966:
        if input[10] < 2.4943287:
            if input[10] < -0.4105998:
                if input[1] < 0.062419575:
                    var23 = 0.08511701
                else:
                    var23 = 0.30895504
            else:
                if input[10] < 2.2996657:
                    var23 = -0.6600442
                else:
                    var23 = -0.014561229
        else:
            var23 = 0.49235114
    else:
        if input[7] < -1.2141986:
            if input[10] < -0.41054955:
                if input[1] < -0.5903248:
                    var23 = -0.2170097
                else:
                    var23 = -0.60009664
            else:
                if input[10] < 2.1488516:
                    var23 = 0.5510801
                else:
                    var23 = -0.2314107
        else:
            if input[7] < -0.38337517:
                if input[1] < -0.58829534:
                    var23 = -0.21517695
                else:
                    var23 = 0.1994115
            else:
                if input[1] < -0.20618671:
                    var23 = 0.34242436
                else:
                    var23 = -0.100030124
    if input[13] < 0.22608225:
        if input[10] < -0.41060024:
            var24 = -0.4697914
        else:
            if input[8] < -0.0068355044:
                var24 = 0.0023324827
            else:
                var24 = 0.2528698
    else:
        if input[9] < -0.7461136:
            if input[8] < -0.006835495:
                if input[8] < -0.006835505:
                    var24 = 0.020046022
                else:
                    var24 = 0.48665333
            else:
                if input[8] < -0.006834942:
                    var24 = -0.016975444
                else:
                    var24 = 0.3811526
        else:
            if input[13] < 1.8577936:
                if input[9] < -0.7129206:
                    var24 = -0.34018478
                else:
                    var24 = -0.015312772
            else:
                if input[9] < 1.8495587:
                    var24 = 0.45631072
                else:
                    var24 = -0.14456505
    if input[4] < 0.08713068:
        if input[5] < -0.24498557:
            if input[4] < -0.4217719:
                if input[10] < 2.4944935:
                    var25 = -0.07391269
                else:
                    var25 = 0.2732936
            else:
                if input[10] < 2.4346273:
                    var25 = 0.25319502
                else:
                    var25 = -0.2169931
        else:
            if input[7] < -0.05277647:
                if input[8] < -0.0068352045:
                    var25 = 0.05512505
                else:
                    var25 = -0.3336857
            else:
                if input[9] < 1.6472056:
                    var25 = -0.9567293
                else:
                    var25 = -0.074356504
    else:
        if input[5] < 0.21535209:
            if input[8] < -0.006834383:
                if input[5] < -0.5014724:
                    var25 = -0.31138074
                else:
                    var25 = 0.20235412
            else:
                if input[5] < -0.21761355:
                    var25 = 0.49769822
                else:
                    var25 = 0.15659086
        else:
            if input[4] < 0.8557113:
                if input[7] < 0.16388085:
                    var25 = 0.053469487
                else:
                    var25 = -0.40631783
            else:
                if input[5] < 0.7251524:
                    var25 = 0.39487633
                else:
                    var25 = 0.04503158
    if input[13] < 1.32584:
        if input[2] < 1.3350618:
            if input[13] < 0.22608225:
                if input[10] < 2.3298361:
                    var26 = -0.44293684
                else:
                    var26 = 0.28696975
            else:
                if input[10] < -0.330976:
                    var26 = 0.12685247
                else:
                    var26 = -0.11791528
        else:
            if input[13] < 0.42164645:
                if input[4] < -0.11245949:
                    var26 = -0.29967478
                else:
                    var26 = 0.08751029
            else:
                if input[13] < 1.1478108:
                    var26 = -0.5366308
                else:
                    var26 = 0.07633747
    else:
        if input[7] < 0.5670008:
            if input[10] < 0.94478625:
                if input[4] < 1.2864863:
                    var26 = -0.5286871
                else:
                    var26 = 0.17930485
            else:
                if input[7] < -0.3118328:
                    var26 = 0.23992269
                else:
                    var26 = -0.32451242
        else:
            if input[6] < -0.11682815:
                if input[2] < 1.2897806:
                    var26 = 0.13316664
                else:
                    var26 = 0.5373195
            else:
                if input[6] < 1.1181712:
                    var26 = -0.10516186
                else:
                    var26 = 0.25420874
    if input[1] < 1.6518167:
        if input[10] < 2.5081012:
            if input[12] < 2.3678677:
                if input[12] < 2.3260922:
                    var27 = -0.006496293
                else:
                    var27 = 0.5406697
            else:
                if input[7] < -0.8967054:
                    var27 = 0.21551289
                else:
                    var27 = -0.40517932
        else:
            if input[8] < -0.0068354653:
                if input[2] < 1.0445951:
                    var27 = -0.15183714
                else:
                    var27 = 0.20435113
            else:
                var27 = 0.50745016
    else:
        if input[12] < 1.0223489:
            if input[9] < 1.630342:
                var27 = -0.36892602
            else:
                var27 = 0.24426058
        else:
            if input[8] < -0.0069132056:
                var27 = -0.09420201
            else:
                var27 = -0.49972066
    if input[6] < -0.39817718:
        if input[10] < 2.5081012:
            if input[13] < 0.9564157:
                if input[13] < 0.74281126:
                    var28 = -0.037924502
                else:
                    var28 = 0.5715164
            else:
                if input[9] < 1.5052292:
                    var28 = -0.29874435
                else:
                    var28 = -0.0087837465
        else:
            if input[6] < -0.9192709:
                var28 = -0.16062155
            else:
                if input[6] < -0.80472517:
                    var28 = 0.7153026
                else:
                    var28 = 0.11195565
    else:
        if input[1] < 0.034333866:
            if input[13] < 1.2388383:
                if input[13] < 0.22608225:
                    var28 = -0.15951985
                else:
                    var28 = 0.38521376
            else:
                if input[2] < -0.17403847:
                    var28 = -0.48536658
                else:
                    var28 = 0.110615715
        else:
            if input[13] < 1.0160463:
                if input[2] < 0.058510546:
                    var28 = -0.38208434
                else:
                    var28 = -0.09784645
            else:
                if input[13] < 1.32584:
                    var28 = 0.31163377
                else:
                    var28 = 0.046914145
    if input[0] < 0.17804542:
        if input[4] < -0.5046905:
            if input[13] < 1.1478108:
                if input[8] < -0.00683535:
                    var29 = 0.03011172
                else:
                    var29 = 0.4670958
            else:
                if input[7] < -1.2291015:
                    var29 = -0.56409764
                else:
                    var29 = -0.043379597
        else:
            if input[13] < 0.22608225:
                var29 = -0.12556426
            else:
                if input[7] < -0.05277647:
                    var29 = 0.41572073
                else:
                    var29 = 0.16421334
    else:
        if input[13] < 0.74281126:
            if input[5] < -0.6142863:
                if input[4] < -1.1950248:
                    var29 = -0.2369401
                else:
                    var29 = 0.1536936
            else:
                if input[4] < 0.068559624:
                    var29 = -0.41835526
                else:
                    var29 = -0.13695945
        else:
            if input[13] < 0.9564157:
                var29 = 0.50490403
            else:
                if input[0] < 0.9616683:
                    var29 = 0.06701141
                else:
                    var29 = -0.16451834
    if input[2] < 2.024894:
        if input[1] < 1.6316638:
            if input[1] < 1.3977829:
                if input[8] < -0.0068407496:
                    var30 = -0.244911
                else:
                    var30 = 0.03403343
            else:
                if input[7] < 1.126962:
                    var30 = 0.41802415
                else:
                    var30 = -0.109837994
        else:
            if input[10] < -0.41060024:
                if input[13] < 1.3808988:
                    var30 = -0.30710512
                else:
                    var30 = 0.3015751
            else:
                if input[10] < 2.5084407:
                    var30 = -0.43460488
                else:
                    var30 = -0.00895705
    else:
        if input[9] < 1.6066908:
            var30 = -0.07133634
        else:
            var30 = -0.47233576
    if input[0] < 1.1869025:
        if input[0] < -0.15744999:
            if input[2] < -0.17403847:
                if input[13] < 1.1478108:
                    var31 = 0.11907091
                else:
                    var31 = -0.30884054
            else:
                var31 = 0.43501624
        else:
            if input[7] < -0.002835115:
                if input[6] < 0.42777726:
                    var31 = -0.08079767
                else:
                    var31 = 0.36554542
            else:
                if input[4] < -0.45805025:
                    var31 = -0.2820443
                else:
                    var31 = 0.07941557
    else:
        var31 = -0.36179164
    if input[5] < 0.0940958:
        if input[6] < 0.85395443:
            if input[6] < 0.72737306:
                if input[5] < -1.2100307:
                    var32 = 0.11838675
                else:
                    var32 = -0.020402366
            else:
                var32 = -0.49533513
        else:
            var32 = 0.40391365
    else:
        if input[4] < 0.3601311:
            if input[7] < 0.14395873:
                if input[6] < 0.5567697:
                    var32 = -0.25506264
                else:
                    var32 = 0.23919924
            else:
                if input[5] < 0.16398875:
                    var32 = 0.061915983
                else:
                    var32 = -0.6610316
        else:
            if input[5] < 1.7636012:
                if input[5] < 1.004594:
                    var32 = 0.0057004844
                else:
                    var32 = -0.23401488
            else:
                var32 = 0.3117156
    if input[3] < 2.4907265:
        if input[3] < 2.4903069:
            if input[8] < -0.0068345475:
                if input[0] < 0.94288284:
                    var33 = 0.025779735
                else:
                    var33 = -0.15110913
            else:
                if input[6] < -0.995029:
                    var33 = 0.36884263
                else:
                    var33 = 0.013526601
        else:
            if input[4] < -1.1767244:
                if input[10] < 2.2083344:
                    var33 = 0.2986931
                else:
                    var33 = -0.41485813
            else:
                if input[4] < -0.05415567:
                    var33 = -0.44058824
                else:
                    var33 = -0.066456385
    else:
        var33 = 0.59535724
    if input[13] < 1.8577936:
        if input[12] < 2.3839366:
            if input[1] < 0.062419575:
                if input[9] < 1.3624849:
                    var34 = 0.013483124
                else:
                    var34 = -0.22774561
            else:
                if input[1] < 0.43661723:
                    var34 = 0.2386592
                else:
                    var34 = -0.021906175
        else:
            if input[8] < -0.006835371:
                if input[13] < 1.6341581:
                    var34 = -0.58748
                else:
                    var34 = -0.12112208
            else:
                if input[6] < -0.8816124:
                    var34 = 0.29711884
                else:
                    var34 = -0.13931055
    else:
        if input[9] < 1.8419905:
            if input[12] < 2.3980508:
                var34 = 0.42665353
            else:
                var34 = -0.024450963
        else:
            var34 = -0.0962786
    var35 = var0 + var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8 + var9 + var10 + var11 + var12 + var13 + var14 + var15 + var16 + var17 + var18 + var19 + var20 + var21 + var22 + var23 + var24 + var25 + var26 + var27 + var28 + var29 + var30 + var31 + var32 + var33 + var34
    if input[9] < -0.15212247:
        if input[8] < -0.0068354737:
            if input[9] < -0.7461136:
                if input[8] < -0.0068354798:
                    var36 = 0.079467304
                else:
                    var36 = -0.5455484
            else:
                if input[6] < -0.98786396:
                    var36 = 0.18559897
                else:
                    var36 = -0.46951222
        else:
            if input[1] < 1.2460166:
                if input[13] < 0.5522877:
                    var36 = 0.16697419
                else:
                    var36 = -0.36723107
            else:
                var36 = -0.45398384
    else:
        if input[9] < -0.15113139:
            var36 = 0.4731437
        else:
            if input[9] < 0.6369434:
                if input[6] < -1.05297:
                    var36 = -0.31665763
                else:
                    var36 = 0.009588651
            else:
                if input[9] < 0.7167644:
                    var36 = 0.53365415
                else:
                    var36 = 0.004624151
    if input[0] < 0.5402825:
        if input[13] < 0.22608225:
            if input[12] < 1.0223489:
                var37 = -0.4126611
            else:
                var37 = 0.14568983
        else:
            if input[9] < -0.7382271:
                if input[12] < 2.101891:
                    var37 = 0.45644408
                else:
                    var37 = -0.19335215
            else:
                if input[8] < -0.00667224:
                    var37 = 0.031587414
                else:
                    var37 = 0.32240784
    else:
        if input[8] < -0.0068355007:
            if input[13] < 1.8577936:
                if input[13] < 0.6978998:
                    var37 = 0.02645353
                else:
                    var37 = -0.23563981
            else:
                if input[0] < 0.9616683:
                    var37 = 0.30181527
                else:
                    var37 = 0.0146475965
        else:
            if input[8] < -0.0068354947:
                if input[9] < -0.6890961:
                    var37 = -0.16713676
                else:
                    var37 = 0.35425878
            else:
                if input[6] < -1.1344831:
                    var37 = -0.18139651
                else:
                    var37 = -0.023337588
    if input[9] < 1.5308678:
        if input[9] < 1.4334193:
            if input[4] < -0.4217719:
                if input[7] < -0.32779756:
                    var38 = -0.030835018
                else:
                    var38 = -0.3560681
            else:
                if input[9] < 1.1932384:
                    var38 = 0.032633193
                else:
                    var38 = 0.3915254
        else:
            if input[4] < 0.18075894:
                if input[4] < -0.07338943:
                    var38 = -0.26641038
                else:
                    var38 = 0.21055761
            else:
                if input[6] < 1.4409524:
                    var38 = -0.540199
                else:
                    var38 = 0.05191798
    else:
        if input[4] < -1.403248:
            var38 = -0.47890487
        else:
            if input[8] < -0.006835458:
                if input[7] < 0.99629587:
                    var38 = 0.26671484
                else:
                    var38 = -0.16622531
            else:
                if input[2] < 0.80044484:
                    var38 = -0.15195179
                else:
                    var38 = 0.14859541
    if input[1] < 1.5712967:
        if input[1] < 0.9810929:
            if input[13] < 1.2388383:
                if input[8] < -0.00683535:
                    var39 = -0.016063033
                else:
                    var39 = 0.17183858
            else:
                if input[8] < -0.0018464483:
                    var39 = -0.22163433
                else:
                    var39 = 0.39504197
        else:
            if input[5] < -0.47737068:
                if input[5] < -0.75017256:
                    var39 = 0.121165074
                else:
                    var39 = 0.40181178
            else:
                if input[13] < 1.590418:
                    var39 = -0.20959994
                else:
                    var39 = 0.16808113
    else:
        if input[5] < -0.19868112:
            if input[6] < -0.995029:
                var39 = -0.30984718
            else:
                if input[1] < 1.7140046:
                    var39 = 0.18135731
                else:
                    var39 = -0.019157326
        else:
            if input[13] < 1.8474704:
                var39 = -0.45703205
            else:
                var39 = -0.08159174
    if input[0] < 1.2413504:
        if input[6] < -1.1344831:
            if input[1] < 0.15313421:
                if input[1] < -0.58829534:
                    var40 = -0.07125186
                else:
                    var40 = 0.36933184
            else:
                var40 = -0.493544
        else:
            if input[5] < -1.1278162:
                if input[9] < -0.6890961:
                    var40 = -0.12573437
                else:
                    var40 = 0.26246792
            else:
                if input[5] < -0.8063614:
                    var40 = -0.13864869
                else:
                    var40 = 0.045095205
    else:
        var40 = -0.35534686
    if input[7] < 0.73803514:
        if input[4] < 0.66250205:
            if input[8] < -0.0065306164:
                if input[8] < -0.0068626464:
                    var41 = 0.24947858
                else:
                    var41 = -0.049014322
            else:
                if input[4] < 0.5235074:
                    var41 = 0.32938847
                else:
                    var41 = 0.016268117
        else:
            if input[0] < 0.15436739:
                var41 = 0.04880308
            else:
                var41 = -0.47616023
    else:
        if input[0] < 0.94288284:
            if input[1] < 1.4965936:
                if input[0] < 0.86702746:
                    var41 = 0.1795741
                else:
                    var41 = 0.5082483
            else:
                if input[7] < 1.1526103:
                    var41 = 0.14512213
                else:
                    var41 = -0.30381635
        else:
            if input[8] < -0.006834383:
                if input[0] < 0.9789838:
                    var41 = 0.061355323
                else:
                    var41 = -0.44498697
            else:
                if input[0] < 1.133922:
                    var41 = 0.28083718
                else:
                    var41 = -0.1350557
    if input[5] < -0.05742212:
        if input[6] < -0.24569109:
            if input[8] < -0.0068345475:
                if input[9] < 0.7167644:
                    var42 = 0.035348944
                else:
                    var42 = -0.1315881
            else:
                if input[0] < 0.63570833:
                    var42 = 0.30102208
                else:
                    var42 = -0.028739167
        else:
            if input[5] < -0.7720285:
                if input[0] < 0.7118067:
                    var42 = 0.28381804
                else:
                    var42 = -0.4966334
            else:
                if input[9] < -0.39408252:
                    var42 = -0.058637068
                else:
                    var42 = 0.26436597
    else:
        if input[4] < 0.54469585:
            if input[9] < 1.4777132:
                if input[6] < 0.17379436:
                    var42 = 0.1164459
                else:
                    var42 = -0.23583877
            else:
                if input[0] < 0.3821227:
                    var42 = -0.16489764
                else:
                    var42 = -0.47090352
        else:
            if input[0] < 0.94288284:
                if input[8] < -0.006834813:
                    var42 = 0.20958304
                else:
                    var42 = -0.20805371
            else:
                if input[5] < 1.452964:
                    var42 = -0.47926477
                else:
                    var42 = 0.19421338
    if input[5] < -0.9729085:
        if input[12] < 2.1113806:
            if input[13] < 1.0160463:
                if input[7] < -0.3977459:
                    var43 = 0.1252172
                else:
                    var43 = -0.41413334
            else:
                if input[8] < -0.0068358774:
                    var43 = 0.1837664
                else:
                    var43 = -0.44194067
        else:
            if input[9] < 1.5145398:
                if input[8] < -0.006835488:
                    var43 = 0.19781154
                else:
                    var43 = -0.36418825
            else:
                if input[12] < 2.3899891:
                    var43 = 0.5654914
                else:
                    var43 = -0.047461785
    else:
        if input[12] < 2.319605:
            if input[5] < -0.8584019:
                if input[9] < 0.74165624:
                    var43 = 0.023152286
                else:
                    var43 = -0.50968754
            else:
                if input[8] < -0.006835395:
                    var43 = 0.091352955
                else:
                    var43 = -0.07272251
        else:
            if input[9] < 1.7879488:
                if input[13] < 1.6147134:
                    var43 = -0.44296005
                else:
                    var43 = -0.13880889
            else:
                if input[12] < 2.398649:
                    var43 = 0.17731155
                else:
                    var43 = -0.29597348
    if input[8] < -0.006835499:
        if input[1] < 0.062419575:
            if input[1] < -0.20618671:
                if input[10] < 2.393951:
                    var44 = 0.061380643
                else:
                    var44 = -0.52079093
            else:
                if input[4] < -1.1950248:
                    var44 = -0.074681506
                else:
                    var44 = -0.5857049
        else:
            if input[0] < -0.02585585:
                if input[10] < -0.41060013:
                    var44 = 0.47643974
                else:
                    var44 = -0.017100424
            else:
                if input[8] < -0.006835712:
                    var44 = -0.16027786
                else:
                    var44 = 0.29337874
    else:
        if input[8] < -0.0068354844:
            if input[7] < -1.1165553:
                if input[10] < 2.479586:
                    var44 = -0.3464728
                else:
                    var44 = 0.09793783
            else:
                if input[7] < -0.8615595:
                    var44 = 0.52537286
                else:
                    var44 = 0.098705985
        else:
            if input[4] < -1.3210816:
                if input[1] < 0.6538668:
                    var44 = 0.36804256
                else:
                    var44 = -0.18463263
            else:
                if input[4] < -1.281309:
                    var44 = -0.42994985
                else:
                    var44 = -0.044690844
    if input[5] < 0.20184647:
        if input[10] < 2.5081012:
            if input[6] < 0.85395443:
                if input[6] < 0.72737306:
                    var45 = 0.0028045387
                else:
                    var45 = -0.39825702
            else:
                if input[1] < 0.29511595:
                    var45 = 0.3515639
                else:
                    var45 = 0.064712234
        else:
            if input[7] < 0.5942115:
                if input[10] < 2.5083058:
                    var45 = 0.4413359
                else:
                    var45 = 0.11256799
            else:
                var45 = 0.094603
    else:
        if input[0] < 0.03910268:
            if input[1] < 0.7073565:
                if input[5] < 1.1532851:
                    var45 = 0.2656974
                else:
                    var45 = 0.009994297
            else:
                var45 = -0.043174762
        else:
            if input[1] < 0.77546597:
                if input[0] < 0.22194934:
                    var45 = -0.5736533
                else:
                    var45 = -0.18009473
            else:
                if input[6] < 1.1701086:
                    var45 = 0.055369712
                else:
                    var45 = -0.25673223
    if input[9] < -0.42017102:
        if input[10] < -0.41060007:
            if input[6] < 0.28257406:
                if input[9] < -0.7382271:
                    var46 = -0.02086286
                else:
                    var46 = -0.27441695
            else:
                if input[9] < -0.7429468:
                    var46 = -0.03920069
                else:
                    var46 = 0.32335603
        else:
            if input[10] < 0.76490664:
                var46 = 0.060396582
            else:
                var46 = 0.33372784
    else:
        if input[3] < 2.4903069:
            if input[9] < -0.0045849904:
                if input[6] < 0.03875348:
                    var46 = 0.45121515
                else:
                    var46 = 0.031026887
            else:
                if input[1] < -0.20618671:
                    var46 = 0.1433349
                else:
                    var46 = -0.0023734104
        else:
            if input[9] < -0.05907872:
                if input[9] < -0.3656591:
                    var46 = 0.11215254
                else:
                    var46 = -0.37750804
            else:
                if input[10] < 2.2996657:
                    var46 = 0.07065184
                else:
                    var46 = -0.2628136
    if input[9] < 1.5145398:
        if input[9] < 1.490532:
            if input[4] < 0.068559624:
                if input[4] < -1.1391929:
                    var47 = -0.15893279
                else:
                    var47 = -0.021583555
            else:
                if input[0] < 0.6566604:
                    var47 = 0.27670264
                else:
                    var47 = -0.04213235
        else:
            if input[9] < 1.4936098:
                var47 = -0.43972546
            else:
                if input[0] < 0.3821227:
                    var47 = -0.06905889
                else:
                    var47 = -0.2676807
    else:
        if input[0] < 1.0374212:
            if input[5] < -1.276238:
                var47 = -0.36966625
            else:
                if input[12] < 2.3839366:
                    var47 = 0.17539507
                else:
                    var47 = -0.10540718
        else:
            if input[0] < 1.0977399:
                if input[4] < 0.068559624:
                    var47 = -0.5438191
                else:
                    var47 = 0.051014315
            else:
                if input[0] < 1.1490984:
                    var47 = 0.20324424
                else:
                    var47 = -0.16723248
    if input[0] < 0.9108674:
        if input[8] < -0.006835712:
            if input[5] < 0.7251524:
                if input[5] < -1.1368444:
                    var48 = -0.26940736
                else:
                    var48 = 0.1924162
            else:
                var48 = -0.3542935
        else:
            if input[0] < 0.6769307:
                if input[5] < -0.5927634:
                    var48 = 0.09215191
                else:
                    var48 = -0.093226135
            else:
                if input[6] < 0.7314734:
                    var48 = -0.1688907
                else:
                    var48 = 0.18462358
    else:
        if input[8] < -0.006835712:
            if input[13] < 1.835705:
                if input[6] < 0.27208868:
                    var48 = -0.38264826
                else:
                    var48 = -0.09944638
            else:
                var48 = 0.05208461
        else:
            if input[0] < 1.1091319:
                if input[8] < -0.0068354965:
                    var48 = 0.5737279
                else:
                    var48 = 0.104989246
            else:
                if input[8] < -0.006835463:
                    var48 = -0.45200637
                else:
                    var48 = 0.065228514
    if input[13] < 0.22608225:
        if input[10] < 0.76490664:
            var49 = -0.38826126
        else:
            var49 = 0.18488641
    else:
        if input[12] < 2.101891:
            if input[13] < 1.3935817:
                if input[9] < -0.7461136:
                    var49 = 0.33153358
                else:
                    var49 = 0.044745192
            else:
                if input[8] < -0.0018464483:
                    var49 = -0.36181343
                else:
                    var49 = 0.32162875
        else:
            if input[13] < 0.28920457:
                if input[0] < 0.86702746:
                    var49 = -0.37890652
                else:
                    var49 = 0.24740638
            else:
                if input[8] < -0.006835492:
                    var49 = 0.17463191
                else:
                    var49 = -0.046783015
    if input[7] < 0.13124476:
        if input[6] < -0.044094507:
            if input[7] < -0.31030595:
                if input[6] < -0.40789413:
                    var50 = -0.008630607
                else:
                    var50 = 0.25729913
            else:
                if input[12] < 1.0223489:
                    var50 = 0.015310492
                else:
                    var50 = -0.39920273
        else:
            if input[5] < -0.21761355:
                if input[7] < -0.44507718:
                    var50 = 0.090370394
                else:
                    var50 = 0.42674628
            else:
                if input[5] < -0.025077384:
                    var50 = -0.34413898
                else:
                    var50 = 0.17896679
    else:
        if input[10] < 2.5084074:
            if input[5] < -0.26141685:
                if input[7] < 0.5670008:
                    var50 = -0.07056038
                else:
                    var50 = 0.11453866
            else:
                if input[4] < 0.18075894:
                    var50 = -0.41157588
                else:
                    var50 = -0.06754237
        else:
            var50 = 0.2624265
    if input[2] < 2.024894:
        if input[6] < -0.76735336:
            if input[2] < 0.16739047:
                if input[8] < -0.006835494:
                    var51 = 0.11599857
                else:
                    var51 = -0.12308506
            else:
                if input[10] < 2.382575:
                    var51 = 0.083494484
                else:
                    var51 = 0.38443086
        else:
            if input[7] < -0.91199803:
                var51 = -0.44957125
            else:
                if input[8] < -0.0068354984:
                    var51 = -0.099369615
                else:
                    var51 = 0.053721692
    else:
        var51 = -0.33080304
    if input[9] < -0.15212247:
        if input[10] < -0.41060024:
            if input[12] < 1.0223489:
                if input[5] < -1.1576457:
                    var52 = 0.074368075
                else:
                    var52 = -0.16371071
            else:
                var52 = -0.44233072
        else:
            if input[9] < -0.7461136:
                if input[5] < -0.90171605:
                    var52 = -0.19248472
                else:
                    var52 = 0.18716422
            else:
                var52 = 0.36124957
    else:
        if input[9] < -0.15113139:
            var52 = 0.3845031
        else:
            if input[9] < -0.05907872:
                if input[5] < -0.34137917:
                    var52 = -0.011744517
                else:
                    var52 = -0.4763063
            else:
                if input[1] < -0.20618671:
                    var52 = 0.13084854
                else:
                    var52 = -0.018658789
    if input[3] < 2.4907265:
        if input[4] < -0.5650263:
            if input[10] < 2.3916075:
                if input[9] < 1.2482135:
                    var53 = -0.01266543
                else:
                    var53 = -0.31982455
            else:
                if input[4] < -1.403248:
                    var53 = -0.39611092
                else:
                    var53 = 0.23287797
        else:
            if input[9] < 0.7042979:
                if input[9] < 0.2099412:
                    var53 = 0.0004306389
                else:
                    var53 = -0.3233641
            else:
                if input[10] < 2.1488516:
                    var53 = 0.13674186
                else:
                    var53 = -0.04529098
    else:
        var53 = 0.42118576
    if input[0] < 0.6707853:
        if input[2] < 0.29621428:
            if input[9] < -0.39408252:
                if input[9] < -0.7461136:
                    var54 = -0.0028331017
                else:
                    var54 = -0.3123615
            else:
                if input[9] < 1.7791376:
                    var54 = 0.082944155
                else:
                    var54 = -0.32199863
        else:
            if input[2] < 1.5504389:
                if input[5] < -0.05742212:
                    var54 = 0.32249025
                else:
                    var54 = -0.013378973
            else:
                if input[0] < 0.6103641:
                    var54 = -0.38404223
                else:
                    var54 = 0.08356365
    else:
        if input[5] < -1.2167692:
            if input[8] < -0.0068354737:
                if input[2] < 0.023945602:
                    var54 = 0.13183686
                else:
                    var54 = -0.26974967
            else:
                var54 = 0.4024504
        else:
            if input[2] < -0.6188564:
                if input[8] < -0.0068355026:
                    var54 = -0.19817525
                else:
                    var54 = 0.41908982
            else:
                if input[9] < 1.1932384:
                    var54 = -0.23045659
                else:
                    var54 = -0.0850428
    if input[9] < 1.8444519:
        if input[2] < 1.3609613:
            if input[2] < 1.061175:
                if input[12] < 2.3678677:
                    var55 = 0.03191997
                else:
                    var55 = -0.21692353
            else:
                if input[5] < -0.75017256:
                    var55 = -0.060401883
                else:
                    var55 = 0.22094302
        else:
            if input[9] < 1.5805223:
                if input[2] < 1.8954475:
                    var55 = -0.26234668
                else:
                    var55 = 0.13076322
            else:
                if input[2] < 1.7296573:
                    var55 = 0.16118348
                else:
                    var55 = -0.2190699
    else:
        var55 = -0.35671908
    if input[1] < 0.9810929:
        if input[9] < 1.2482135:
            if input[9] < 1.2224033:
                if input[9] < 0.7167644:
                    var56 = 0.048474144
                else:
                    var56 = -0.1837731
            else:
                if input[4] < -1.0838786:
                    var56 = 0.02684526
                else:
                    var56 = 0.3708719
        else:
            if input[5] < -0.6446758:
                if input[5] < -0.8815931:
                    var56 = -0.0678743
                else:
                    var56 = -0.4450932
            else:
                if input[9] < 1.4777132:
                    var56 = 0.18394098
                else:
                    var56 = -0.07923563
    else:
        if input[10] < 2.5066073:
            if input[9] < 1.750089:
                if input[9] < -0.5596198:
                    var56 = -0.2700009
                else:
                    var56 = 0.10874535
            else:
                if input[5] < -0.4330885:
                    var56 = -0.081087455
                else:
                    var56 = -0.33353412
        else:
            if input[12] < 2.39871:
                if input[1] < 1.4965936:
                    var56 = 0.37694827
                else:
                    var56 = 0.04290406
            else:
                var56 = -0.16483183
    if input[4] < -1.1950248:
        if input[5] < -1.2100307:
            if input[10] < 2.4637282:
                if input[4] < -1.3083717:
                    var57 = 0.06030797
                else:
                    var57 = 0.3586471
            else:
                if input[7] < -1.2489095:
                    var57 = -0.008905516
                else:
                    var57 = -0.35404092
        else:
            if input[10] < 2.4840596:
                if input[9] < -0.7461136:
                    var57 = -0.028401263
                else:
                    var57 = -0.43140736
            else:
                var57 = 0.40432683
    else:
        if input[4] < -1.0307143:
            if input[13] < 1.1028781:
                if input[9] < -0.10454469:
                    var57 = -0.010862641
                else:
                    var57 = 0.39828217
            else:
                var57 = -0.20737223
        else:
            if input[10] < 2.5004966:
                if input[10] < 1.3244584:
                    var57 = 0.0144791985
                else:
                    var57 = -0.21674
            else:
                if input[5] < -0.53698564:
                    var57 = 0.4197717
                else:
                    var57 = 0.013091799
    if input[3] < 2.4907265:
        if input[8] < -0.006422926:
            if input[3] < 2.4903069:
                if input[8] < -0.0067273797:
                    var58 = -0.029062444
                else:
                    var58 = 0.21594873
            else:
                if input[8] < -0.006817702:
                    var58 = 0.091946304
                else:
                    var58 = -0.30376476
        else:
            if input[10] < 0.64723617:
                if input[5] < 0.4350262:
                    var58 = 0.2689617
                else:
                    var58 = 0.05581585
            else:
                var58 = -0.13757695
    else:
        var58 = 0.32667503
    if input[5] < 1.058887:
        if input[4] < 1.1020385:
            if input[5] < 0.4350262:
                if input[4] < 0.14808951:
                    var59 = 0.0055327797
                else:
                    var59 = 0.13419929
            else:
                if input[7] < 0.8948774:
                    var59 = -0.018615019
                else:
                    var59 = -0.3239795
        else:
            if input[8] < -0.0068341424:
                if input[12] < 2.3678677:
                    var59 = 0.36962348
                else:
                    var59 = 0.090808526
            else:
                if input[4] < 1.4375215:
                    var59 = 0.06097549
                else:
                    var59 = -0.19400075
    else:
        if input[5] < 1.6040885:
            if input[7] < 1.1025597:
                if input[7] < 0.86906564:
                    var59 = -0.234295
                else:
                    var59 = 0.21593486
            else:
                var59 = -0.37914196
        else:
            var59 = 0.1033062
    if input[0] < -0.46057376:
        if input[13] < 0.22608225:
            var60 = -0.2684801
        else:
            if input[7] < -1.0895156:
                if input[1] < -0.5903248:
                    var60 = 0.14640547
                else:
                    var60 = -0.17931965
            else:
                if input[0] < -0.8252662:
                    var60 = 0.078676865
                else:
                    var60 = 0.43922684
    else:
        if input[0] < -0.37654382:
            var60 = -0.3248897
        else:
            if input[13] < 1.32584:
                if input[7] < 1.0537775:
                    var60 = 0.017294602
                else:
                    var60 = -0.20779735
            else:
                if input[7] < 0.5670008:
                    var60 = -0.18788476
                else:
                    var60 = 0.04623568
    if input[1] < 1.8449905:
        if input[0] < 0.5584612:
            if input[1] < 0.99653345:
                if input[6] < 1.3945639:
                    var61 = -0.011066562
                else:
                    var61 = 0.31788492
            else:
                if input[5] < 0.8271859:
                    var61 = 0.3882945
                else:
                    var61 = 0.02576938
        else:
            if input[2] < 0.4411897:
                if input[2] < 0.3487683:
                    var61 = -0.008408722
                else:
                    var61 = 0.35178936
            else:
                if input[12] < 1.0223489:
                    var61 = -0.17614841
                else:
                    var61 = 0.06236835
    else:
        var61 = -0.30794603
    if input[8] < -0.0068355016:
        if input[4] < -0.6249043:
            if input[8] < -0.0068541933:
                var62 = 0.1788262
            else:
                if input[6] < -1.0317743:
                    var62 = -0.030180998
                else:
                    var62 = -0.26683417
        else:
            if input[8] < -0.0068407496:
                if input[6] < -0.044094507:
                    var62 = 0.042231165
                else:
                    var62 = -0.31241375
            else:
                if input[8] < -0.006835503:
                    var62 = 0.255264
                else:
                    var62 = -0.0795738
    else:
        if input[1] < 0.034333866:
            if input[6] < -0.22280426:
                if input[4] < -1.3210816:
                    var62 = 0.22751494
                else:
                    var62 = -0.008161924
            else:
                if input[13] < 1.32584:
                    var62 = 0.3632154
                else:
                    var62 = -0.22312516
        else:
            if input[4] < -0.9449388:
                if input[8] < -0.006835406:
                    var62 = 0.00046144138
                else:
                    var62 = 0.40655035
            else:
                if input[6] < -0.84264046:
                    var62 = -0.36763373
                else:
                    var62 = -0.015341111
    if input[12] < 2.319605:
        if input[12] < 2.1113806:
            if input[7] < 0.31250146:
                if input[4] < -0.13225818:
                    var63 = -0.014588138
                else:
                    var63 = 0.11803057
            else:
                if input[7] < 0.34661782:
                    var63 = -0.42291486
                else:
                    var63 = -0.03296102
        else:
            var63 = 0.4246018
    else:
        if input[8] < -0.0068352455:
            if input[8] < -0.0068541933:
                if input[7] < 0.75587326:
                    var63 = 0.15218748
                else:
                    var63 = -0.11845452
            else:
                if input[7] < -0.63926005:
                    var63 = -0.01144116
                else:
                    var63 = -0.31542844
        else:
            if input[8] < -0.006832702:
                var63 = 0.19686754
            else:
                var63 = -0.10670364
    if input[6] < -1.1233191:
        if input[2] < 1.2135941:
            if input[2] < 1.0768789:
                if input[9] < -0.05907872:
                    var64 = -0.14975815
                else:
                    var64 = 0.020743381
            else:
                var64 = 0.30967966
        else:
            if input[9] < -0.7461136:
                var64 = 0.07489359
            else:
                if input[0] < 0.2861237:
                    var64 = 0.0071449135
                else:
                    var64 = -0.33865628
    else:
        if input[3] < -0.28603184:
            if input[8] < -0.006822546:
                if input[0] < 1.0977399:
                    var64 = 0.03637751
                else:
                    var64 = -0.20355134
            else:
                if input[6] < 0.186764:
                    var64 = 0.36895952
                else:
                    var64 = -0.025518794
        else:
            var64 = 0.34553808
    if input[13] < 0.22608225:
        var65 = -0.2158755
    else:
        if input[9] < -0.7382271:
            if input[7] < 0.13124476:
                if input[4] < -1.3083717:
                    var65 = -0.07231367
                else:
                    var65 = 0.38086998
            else:
                var65 = -0.28107047
        else:
            if input[8] < -0.0068354984:
                if input[1] < 0.93377477:
                    var65 = -0.11631172
                else:
                    var65 = 0.076680325
            else:
                if input[4] < 1.1020385:
                    var65 = 0.0077719297
                else:
                    var65 = 0.20621085
    if input[6] < -0.44732547:
        if input[2] < 1.1127981:
            if input[10] < -0.41059917:
                if input[4] < -1.1391929:
                    var66 = -0.034905773
                else:
                    var66 = 0.17935091
            else:
                if input[6] < -1.0659347:
                    var66 = 0.10629612
                else:
                    var66 = -0.19759034
        else:
            if input[4] < -0.43716282:
                var66 = -0.26847598
            else:
                if input[8] < -0.00462421:
                    var66 = 0.1293839
                else:
                    var66 = -0.2308038
    else:
        if input[6] < -0.39817718:
            if input[1] < -0.3591696:
                var66 = 0.063647166
            else:
                if input[8] < -0.0068354653:
                    var66 = -0.51184505
                else:
                    var66 = -0.06364795
        else:
            if input[8] < -0.0068354653:
                if input[8] < -0.0068354914:
                    var66 = -0.02111665
                else:
                    var66 = 0.16184619
            else:
                if input[8] < -0.0018464483:
                    var66 = -0.15545726
                else:
                    var66 = 0.28798583
    if input[5] < -0.05742212:
        if input[4] < -0.15797976:
            if input[5] < -0.39574036:
                if input[9] < 0.7167644:
                    var67 = 0.078009814
                else:
                    var67 = -0.040807366
            else:
                if input[2] < -0.37227365:
                    var67 = -0.012178114
                else:
                    var67 = -0.40755615
        else:
            if input[4] < -0.06959723:
                if input[8] < -0.0068355:
                    var67 = 0.44514766
                else:
                    var67 = 0.14918755
            else:
                if input[5] < -0.23212196:
                    var67 = -0.029873412
                else:
                    var67 = 0.22359657
    else:
        if input[4] < 0.8557113:
            if input[2] < -0.19524366:
                if input[9] < 1.4951911:
                    var67 = 0.1314301
                else:
                    var67 = -0.31819066
            else:
                if input[4] < 0.1740444:
                    var67 = -0.48345044
                else:
                    var67 = -0.1534447
        else:
            if input[2] < 0.53501093:
                if input[9] < 1.7756307:
                    var67 = 0.26928815
                else:
                    var67 = -0.09150968
            else:
                if input[5] < 0.7251524:
                    var67 = 0.15733202
                else:
                    var67 = -0.20301995
    if input[0] < 1.1869025:
        if input[7] < -0.002835115:
            if input[7] < -0.1312192:
                if input[4] < -0.84576225:
                    var68 = -0.054183103
                else:
                    var68 = 0.04617645
            else:
                if input[4] < -0.5046905:
                    var68 = 0.023059871
                else:
                    var68 = -0.3315326
        else:
            if input[7] < 0.13124476:
                if input[5] < -0.72784674:
                    var68 = -0.07596685
                else:
                    var68 = 0.31911942
            else:
                if input[13] < 1.0160463:
                    var68 = -0.07471981
                else:
                    var68 = 0.062493872
    else:
        var68 = -0.2576603
    if input[9] < 1.5422175:
        if input[9] < 1.2688061:
            if input[9] < 1.2224033:
                if input[9] < 1.0633249:
                    var69 = 0.018642971
                else:
                    var69 = -0.26243553
            else:
                if input[4] < -1.114278:
                    var69 = 0.02739135
                else:
                    var69 = 0.36115843
        else:
            if input[4] < 0.50758463:
                if input[0] < 0.96959627:
                    var69 = -0.14416806
                else:
                    var69 = 0.11135832
            else:
                if input[4] < 0.90625846:
                    var69 = -0.44378302
                else:
                    var69 = -0.13138185
    else:
        if input[0] < 0.94288284:
            if input[9] < 1.5899094:
                if input[13] < 0.6978998:
                    var69 = 0.41062203
                else:
                    var69 = 0.12668481
            else:
                if input[1] < -0.19111514:
                    var69 = -0.14253715
                else:
                    var69 = 0.111250706
        else:
            if input[1] < 0.67603785:
                if input[12] < 1.0223489:
                    var69 = -0.26773173
                else:
                    var69 = 0.3537553
            else:
                if input[1] < 1.3096418:
                    var69 = -0.33342183
                else:
                    var69 = -0.08149318
    if input[5] < 0.38356993:
        if input[10] < 2.4466536:
            if input[9] < 0.35161796:
                if input[5] < -0.6617352:
                    var70 = 0.05872617
                else:
                    var70 = -0.10922398
            else:
                if input[9] < 0.7167644:
                    var70 = 0.35273996
                else:
                    var70 = 0.07035095
        else:
            if input[9] < 1.7284002:
                if input[13] < 0.6008496:
                    var70 = -0.033109285
                else:
                    var70 = -0.27924895
            else:
                if input[5] < -0.53698564:
                    var70 = 0.2593947
                else:
                    var70 = -0.14553262
    else:
        if input[6] < 0.4597303:
            var70 = -0.34775588
        else:
            if input[6] < 0.9968205:
                if input[5] < 0.9192376:
                    var70 = -0.007570275
                else:
                    var70 = 0.23863038
            else:
                if input[5] < 1.0274051:
                    var70 = -0.022092229
                else:
                    var70 = -0.2689859
    if input[2] < -0.5901068:
        if input[2] < -0.6188564:
            if input[13] < 0.28920457:
                if input[0] < -0.75076395:
                    var71 = 0.13601266
                else:
                    var71 = -0.20780768
            else:
                if input[1] < -0.58829534:
                    var71 = -0.10471753
                else:
                    var71 = 0.41908744
        else:
            if input[13] < 0.6008496:
                if input[5] < -0.72784674:
                    var71 = -0.01784946
                else:
                    var71 = -0.24305075
            else:
                if input[1] < -0.58829534:
                    var71 = -0.1252669
                else:
                    var71 = -0.4975331
    else:
        if input[0] < 0.21107648:
            if input[13] < 0.6978998:
                if input[1] < 0.79680085:
                    var71 = 0.31388345
                else:
                    var71 = 0.018540826
            else:
                if input[2] < 0.058510546:
                    var71 = -0.1167354
                else:
                    var71 = 0.2462757
        else:
            if input[2] < -0.059206758:
                if input[1] < 0.2570979:
                    var71 = 0.0008922362
                else:
                    var71 = 0.2174695
            else:
                if input[13] < 1.0160463:
                    var71 = -0.1016567
                else:
                    var71 = 0.031428356
    if input[13] < 1.2388383:
        if input[12] < 2.3646586:
            if input[13] < 0.74281126:
                if input[13] < 0.6978998:
                    var72 = 0.03738926
                else:
                    var72 = -0.10790693
            else:
                if input[2] < 0.69766074:
                    var72 = 0.2526462
                else:
                    var72 = -0.14818595
        else:
            var72 = -0.31214246
    else:
        if input[2] < 0.16739047:
            if input[4] < 1.4375215:
                if input[7] < 0.77518487:
                    var72 = -0.3628335
                else:
                    var72 = 0.0076567107
            else:
                var72 = 0.20176345
        else:
            if input[7] < -0.14347778:
                if input[13] < 1.6552626:
                    var72 = 0.22933465
                else:
                    var72 = -0.042911306
            else:
                if input[7] < 0.44189024:
                    var72 = -0.21852447
                else:
                    var72 = 0.01337623
    if input[6] < -1.1233191:
        if input[4] < 0.16642691:
            if input[5] < -0.9416436:
                if input[4] < -1.3661507:
                    var73 = -0.14948046
                else:
                    var73 = 0.14148426
            else:
                if input[3] < -0.28603184:
                    var73 = 0.0814921
                else:
                    var73 = -0.41812992
        else:
            if input[5] < 0.14564952:
                if input[2] < 1.1765547:
                    var73 = 0.25337353
                else:
                    var73 = -0.032630216
            else:
                var73 = -0.19836417
    else:
        if input[13] < 0.22608225:
            var73 = -0.2032043
        else:
            if input[6] < -1.0807359:
                if input[1] < 0.43661723:
                    var73 = 0.32514435
                else:
                    var73 = 0.019576732
            else:
                if input[4] < -1.0846173:
                    var73 = -0.09559696
                else:
                    var73 = 0.04264589
    if input[12] < 2.319605:
        if input[13] < 1.5626355:
            if input[9] < 1.5145398:
                if input[9] < 1.490532:
                    var74 = 0.007032245
                else:
                    var74 = -0.27359155
            else:
                if input[1] < -0.19111514:
                    var74 = -0.090588264
                else:
                    var74 = 0.20777166
        else:
            if input[6] < -1.1233191:
                var74 = 0.056687556
            else:
                if input[6] < 1.4409524:
                    var74 = -0.36142856
                else:
                    var74 = 0.043570235
    else:
        if input[13] < 1.4480212:
            if input[6] < -0.8518107:
                if input[9] < 1.547886:
                    var74 = -0.31835532
                else:
                    var74 = 0.18365878
            else:
                var74 = -0.3823215
        else:
            if input[12] < 2.39871:
                if input[12] < 2.3260922:
                    var74 = -0.040452667
                else:
                    var74 = 0.14115119
            else:
                var74 = -0.18809675
    if input[4] < -1.0307143:
        if input[10] < -0.330976:
            if input[1] < 0.77546597:
                if input[1] < 0.062419575:
                    var75 = 0.054975048
                else:
                    var75 = 0.28650337
            else:
                if input[4] < -1.2345222:
                    var75 = -0.30460083
                else:
                    var75 = 0.025669802
        else:
            if input[8] < -0.00683549:
                if input[4] < -1.3210816:
                    var75 = -0.28894848
                else:
                    var75 = -0.024752088
            else:
                if input[6] < -1.1060863:
                    var75 = 0.1840485
                else:
                    var75 = -0.08331328
    else:
        if input[4] < -0.9161311:
            if input[6] < -1.003225:
                var75 = -0.34030676
            else:
                if input[2] < -0.17403847:
                    var75 = -0.19658314
                else:
                    var75 = 0.12061531
        else:
            if input[2] < -0.6188564:
                if input[8] < -0.006835498:
                    var75 = -0.06681365
                else:
                    var75 = 0.2753162
            else:
                if input[2] < -0.5901068:
                    var75 = -0.23035619
                else:
                    var75 = -0.014449352
    if input[5] < -0.19868112:
        if input[6] < 0.33826274:
            if input[10] < 2.382575:
                if input[5] < -1.2100307:
                    var76 = 0.07263435
                else:
                    var76 = -0.07819569
            else:
                if input[5] < -0.7154415:
                    var76 = 0.14496532
                else:
                    var76 = -0.1458941
        else:
            if input[5] < -0.5325022:
                var76 = -0.087117545
            else:
                var76 = 0.40899038
    else:
        if input[0] < 0.40435958:
            if input[6] < 0.91278285:
                if input[6] < 0.42777726:
                    var76 = -0.020380897
                else:
                    var76 = 0.29724634
            else:
                var76 = -0.10916465
        else:
            if input[0] < 0.8273091:
                if input[6] < 0.86947876:
                    var76 = -0.33885548
                else:
                    var76 = -0.082408115
            else:
                if input[6] < 0.17379436:
                    var76 = 0.2138693
                else:
                    var76 = -0.14245565
    if input[7] < -0.8863267:
        if input[9] < 1.2482135:
            if input[7] < -1.044151:
                if input[7] < -1.1946146:
                    var77 = 0.0040912903
                else:
                    var77 = -0.23178655
            else:
                if input[9] < -0.6890961:
                    var77 = -0.14638256
                else:
                    var77 = 0.2602203
        else:
            if input[7] < -1.0673429:
                if input[7] < -1.2378942:
                    var77 = -0.15159771
                else:
                    var77 = 0.24762972
            else:
                if input[5] < -1.0302417:
                    var77 = -0.10668593
                else:
                    var77 = -0.49570757
    else:
        if input[7] < -0.8614367:
            var77 = 0.37701872
        else:
            if input[9] < 0.8662545:
                if input[9] < 0.6369434:
                    var77 = 0.06460666
                else:
                    var77 = 0.2717599
            else:
                if input[9] < 1.2224033:
                    var77 = -0.3411613
                else:
                    var77 = 0.009550546
    if input[1] < 0.034333866:
        if input[9] < 1.6472056:
            if input[5] < -0.15201722:
                if input[4] < -0.40158397:
                    var78 = 0.05697128
                else:
                    var78 = 0.2692581
            else:
                if input[4] < -0.06959723:
                    var78 = -0.30695623
                else:
                    var78 = 0.089058176
        else:
            if input[0] < -0.14521615:
                var78 = -0.013149021
            else:
                if input[5] < -0.8234782:
                    var78 = -0.33846325
                else:
                    var78 = -0.07430807
    else:
        if input[4] < -1.2947433:
            if input[12] < 2.1113806:
                if input[1] < 0.2570979:
                    var78 = -0.0901654
                else:
                    var78 = -0.45831162
            else:
                var78 = -0.008095796
        else:
            if input[1] < 0.062419575:
                if input[9] < -0.24994162:
                    var78 = -0.27503893
                else:
                    var78 = -0.0930094
            else:
                if input[1] < 0.20450042:
                    var78 = 0.31793776
                else:
                    var78 = -0.016176254
    if input[2] < 0.29621428:
        if input[5] < -0.96131945:
            if input[8] < -0.006835497:
                if input[9] < -0.6506783:
                    var79 = 0.005285882
                else:
                    var79 = 0.2283572
            else:
                if input[9] < 1.2942808:
                    var79 = -0.21104227
                else:
                    var79 = 0.15519436
        else:
            if input[1] < 0.67603785:
                if input[1] < 0.20450042:
                    var79 = -0.04450128
                else:
                    var79 = -0.27227736
            else:
                if input[2] < -0.059206758:
                    var79 = 0.31832516
                else:
                    var79 = -0.17304167
    else:
        if input[2] < 0.39464492:
            if input[5] < -0.35293534:
                if input[9] < 1.2688061:
                    var79 = 0.24405262
                else:
                    var79 = -0.19196752
            else:
                var79 = 0.4726385
        else:
            if input[12] < 2.1113806:
                if input[9] < 1.7791376:
                    var79 = 0.0029297336
                else:
                    var79 = -0.261259
            else:
                if input[12] < 2.398319:
                    var79 = 0.16824315
                else:
                    var79 = -0.18638165
    if input[9] < 1.2688061:
        if input[1] < 0.67603785:
            if input[1] < 0.52122915:
                if input[8] < -0.0067697205:
                    var80 = 0.07250967
                else:
                    var80 = -0.10811769
            else:
                if input[2] < 0.604416:
                    var80 = -0.3498936
                else:
                    var80 = 0.07060363
        else:
            if input[5] < -0.75017256:
                if input[13] < 0.6656839:
                    var80 = 0.104027115
                else:
                    var80 = -0.20970817
            else:
                if input[9] < -0.6890961:
                    var80 = -0.034906063
                else:
                    var80 = 0.30065277
    else:
        if input[8] < -0.0018464483:
            if input[2] < -0.17403847:
                if input[6] < 0.5156219:
                    var80 = -0.19908734
                else:
                    var80 = 0.059358574
            else:
                if input[9] < 1.389003:
                    var80 = -0.26348427
                else:
                    var80 = 0.018323058
        else:
            var80 = 0.21120536
    if input[0] < 0.6769307:
        if input[9] < 1.822047:
            if input[1] < 0.83479214:
                if input[1] < 0.7546141:
                    var81 = 0.027731137
                else:
                    var81 = -0.26508948
            else:
                if input[8] < -0.006835371:
                    var81 = 0.27487832
                else:
                    var81 = -0.10318327
        else:
            var81 = -0.28023443
    else:
        if input[8] < -0.006835564:
            if input[1] < 1.4316641:
                if input[1] < 0.48867944:
                    var81 = -0.009155682
                else:
                    var81 = -0.3348667
            else:
                if input[0] < 0.85074407:
                    var81 = 0.14671776
                else:
                    var81 = -0.14758658
        else:
            if input[5] < -0.55069077:
                if input[5] < -1.0167468:
                    var81 = 0.033323184
                else:
                    var81 = -0.19101201
            else:
                if input[8] < -0.0068355:
                    var81 = 0.30260265
                else:
                    var81 = 0.010795421
    if input[0] < 0.18691947:
        if input[13] < 0.22608225:
            var82 = -0.21342608
        else:
            if input[13] < 0.9564157:
                if input[12] < 2.101891:
                    var82 = 0.2155936
                else:
                    var82 = -0.02308591
            else:
                if input[12] < 1.0223489:
                    var82 = -0.17126018
                else:
                    var82 = 0.15404996
    else:
        if input[0] < 0.44170526:
            if input[5] < -0.9811545:
                if input[8] < -0.006835454:
                    var82 = -0.04953368
                else:
                    var82 = -0.41232592
            else:
                if input[13] < 0.28920457:
                    var82 = -0.18970494
                else:
                    var82 = 0.15199186
        else:
            if input[0] < 0.4959279:
                if input[6] < -1.0729444:
                    var82 = -0.08752958
                else:
                    var82 = 0.35422173
            else:
                if input[5] < 1.004594:
                    var82 = -0.0020953452
                else:
                    var82 = -0.19917755
    if input[2] < -0.95835245:
        if input[13] < 0.28920457:
            if input[7] < -1.2489095:
                var83 = 0.10803044
            else:
                if input[8] < -0.0068354984:
                    var83 = -0.1033485
                else:
                    var83 = -0.4768684
        else:
            if input[6] < -1.0605682:
                var83 = -0.121043496
            else:
                if input[8] < -0.006835498:
                    var83 = -0.020720366
                else:
                    var83 = 0.3319613
    else:
        if input[2] < -0.6188564:
            var83 = 0.33683512
        else:
            if input[2] < -0.5901068:
                if input[8] < -0.0068355016:
                    var83 = 0.12889718
                else:
                    var83 = -0.23814029
            else:
                if input[2] < -0.19524366:
                    var83 = 0.18629661
                else:
                    var83 = -0.00009969127
    if input[10] < 2.5081012:
        if input[10] < 2.507151:
            if input[13] < 1.5626355:
                if input[10] < 2.382575:
                    var84 = -0.018729396
                else:
                    var84 = 0.10542299
            else:
                if input[4] < 0.4492532:
                    var84 = -0.25068215
                else:
                    var84 = -0.02271896
        else:
            if input[13] < 1.6552626:
                var84 = -0.30252978
            else:
                var84 = 0.008067986
    else:
        if input[13] < 1.76506:
            var84 = 0.0342343
        else:
            var84 = 0.2253001
    if input[12] < 2.319605:
        if input[12] < 2.1113806:
            if input[2] < 0.69766074:
                if input[2] < 0.16739047:
                    var85 = -0.017577153
                else:
                    var85 = 0.13268875
            else:
                if input[4] < -1.2345222:
                    var85 = -0.33139142
                else:
                    var85 = -0.01845226
        else:
            var85 = 0.3157272
    else:
        if input[2] < 0.53501093:
            if input[9] < 1.7122965:
                var85 = -0.3552785
            else:
                if input[0] < 0.8113718:
                    var85 = 0.07519409
                else:
                    var85 = -0.16856104
        else:
            if input[1] < 1.0554007:
                var85 = 0.21046138
            else:
                if input[9] < 1.8077881:
                    var85 = -0.13385947
                else:
                    var85 = 0.10942048
    if input[7] < -0.32779756:
        if input[1] < -0.58829534:
            if input[9] < -0.7461136:
                if input[4] < -1.3661507:
                    var86 = 0.04970379
                else:
                    var86 = 0.22574264
            else:
                if input[9] < -0.15212247:
                    var86 = -0.17277695
                else:
                    var86 = 0.0010818595
        else:
            if input[9] < 0.7278314:
                if input[7] < -0.8348579:
                    var86 = 0.027193401
                else:
                    var86 = 0.2729478
            else:
                if input[7] < -0.6181675:
                    var86 = 0.10104041
                else:
                    var86 = -0.14769694
    else:
        if input[7] < -0.002835115:
            if input[7] < -0.05277647:
                if input[1] < 0.7546141:
                    var86 = 0.036395807
                else:
                    var86 = -0.2044655
            else:
                var86 = -0.31508225
        else:
            if input[7] < 0.13124476:
                if input[4] < -0.3433798:
                    var86 = -0.013551442
                else:
                    var86 = 0.24673127
            else:
                if input[7] < 0.62571764:
                    var86 = -0.10770974
                else:
                    var86 = 0.02750254
    if input[1] < 0.5925646:
        if input[1] < 0.44565043:
            if input[1] < 0.43661723:
                if input[1] < 0.34937596:
                    var87 = 0.013409205
                else:
                    var87 = 0.3218026
            else:
                var87 = -0.23047349
        else:
            if input[9] < 1.4533669:
                var87 = -0.03511665
            else:
                var87 = 0.29069918
    else:
        if input[8] < -0.0068354905:
            if input[0] < 0.85074407:
                if input[8] < -0.006842738:
                    var87 = -0.011922446
                else:
                    var87 = 0.19995956
            else:
                if input[13] < 0.74281126:
                    var87 = -0.01593862
                else:
                    var87 = -0.19708535
        else:
            if input[1] < 1.4759517:
                if input[1] < 1.324422:
                    var87 = -0.07478875
                else:
                    var87 = -0.23435847
            else:
                if input[1] < 1.5919513:
                    var87 = 0.21576004
                else:
                    var87 = -0.08213702
    if input[8] < -0.006834695:
        if input[5] < -0.8063614:
            if input[6] < -0.71865964:
                if input[8] < -0.0068354844:
                    var88 = 0.03269397
                else:
                    var88 = -0.10164617
            else:
                if input[8] < -0.0068354863:
                    var88 = -0.0890708
                else:
                    var88 = -0.3979173
        else:
            if input[8] < -0.006835497:
                if input[7] < 0.5670008:
                    var88 = -0.093146905
                else:
                    var88 = 0.03409819
            else:
                if input[7] < 0.31250146:
                    var88 = 0.17875937
                else:
                    var88 = -0.037845083
    else:
        if input[5] < -0.49554357:
            if input[6] < -0.84264046:
                if input[5] < -0.67827624:
                    var88 = 0.17500745
                else:
                    var88 = -0.06804264
            else:
                var88 = 0.28883064
        else:
            if input[6] < 1.3945639:
                if input[5] < 0.048819296:
                    var88 = -0.017527422
                else:
                    var88 = -0.2395262
            else:
                var88 = 0.1261537
    if input[1] < -0.20618671:
        if input[4] < -1.223708:
            if input[4] < -1.3210816:
                if input[10] < -0.41060024:
                    var89 = 0.19150895
                else:
                    var89 = -0.16659518
            else:
                var89 = -0.30023012
        else:
            if input[0] < 0.8901663:
                if input[9] < 0.49861622:
                    var89 = -0.017294839
                else:
                    var89 = 0.12913264
            else:
                var89 = 0.2900089
    else:
        if input[9] < -0.22513607:
            if input[10] < -0.41059995:
                if input[0] < 0.9884029:
                    var89 = -0.18325949
                else:
                    var89 = 0.13787599
            else:
                var89 = 0.16547373
        else:
            if input[9] < 0.03762857:
                if input[1] < 0.869263:
                    var89 = 0.30511054
                else:
                    var89 = -0.04684581
            else:
                if input[9] < 0.6369434:
                    var89 = -0.20960574
                else:
                    var89 = 0.008202135
    if input[1] < 1.6518167:
        if input[1] < 1.158902:
            if input[9] < 0.7167644:
                if input[6] < -1.0659347:
                    var90 = -0.079838514
                else:
                    var90 = 0.08430467
            else:
                if input[13] < 0.28920457:
                    var90 = -0.1772877
                else:
                    var90 = 0.0037804376
        else:
            if input[13] < 0.6978998:
                if input[1] < 1.3096418:
                    var90 = 0.3343303
                else:
                    var90 = 0.073846854
            else:
                if input[13] < 1.590418:
                    var90 = -0.10853001
                else:
                    var90 = 0.14430237
    else:
        var90 = -0.17962633
    var91 = var35 + var36 + var37 + var38 + var39 + var40 + var41 + var42 + var43 + var44 + var45 + var46 + var47 + var48 + var49 + var50 + var51 + var52 + var53 + var54 + var55 + var56 + var57 + var58 + var59 + var60 + var61 + var62 + var63 + var64 + var65 + var66 + var67 + var68 + var69 + var70 + var71 + var72 + var73 + var74 + var75 + var76 + var77 + var78 + var79 + var80 + var81 + var82 + var83 + var84 + var85 + var86 + var87 + var88 + var89 + var90
    if input[2] < 0.058510546:
        if input[9] < -0.7461136:
            if input[13] < 0.22608225:
                var92 = -0.16985765
            else:
                if input[12] < 1.0223489:
                    var92 = 0.36510438
                else:
                    var92 = -0.20914763
        else:
            if input[9] < -0.22513607:
                if input[0] < 0.028297966:
                    var92 = 0.037519157
                else:
                    var92 = -0.26443675
            else:
                if input[9] < 0.7167644:
                    var92 = 0.148977
                else:
                    var92 = -0.075838014
    else:
        if input[7] < 1.3428441:
            if input[0] < 0.047835745:
                if input[2] < 0.6732342:
                    var92 = 0.24608825
                else:
                    var92 = 0.058184326
            else:
                if input[0] < 0.44170526:
                    var92 = -0.10085616
                else:
                    var92 = 0.05587497
        else:
            if input[13] < 1.8221527:
                var92 = -0.2857112
            else:
                var92 = 0.06555223
    if input[0] < 0.17804542:
        if input[0] < 0.15436739:
            if input[8] < -0.006835488:
                if input[13] < 0.22608225:
                    var93 = -0.10838906
                else:
                    var93 = 0.11628596
            else:
                if input[8] < -0.006835481:
                    var93 = -0.31415498
                else:
                    var93 = 0.00870853
        else:
            var93 = 0.30937046
    else:
        if input[1] < 1.158902:
            if input[2] < 0.48329082:
                if input[12] < 2.101891:
                    var93 = 0.04080359
                else:
                    var93 = -0.13576803
            else:
                if input[2] < 0.804266:
                    var93 = -0.23306306
                else:
                    var93 = -0.025824498
        else:
            if input[2] < 0.604416:
                var93 = -0.22819503
            else:
                if input[13] < 1.32584:
                    var93 = 0.17199041
                else:
                    var93 = -0.013422044
    if input[0] < 0.8579408:
        if input[2] < -0.17403847:
            if input[2] < -0.19524366:
                if input[9] < -0.22513607:
                    var94 = -0.07657957
                else:
                    var94 = 0.046715297
            else:
                if input[0] < 0.27600068:
                    var94 = -0.23488803
                else:
                    var94 = -0.04280464
        else:
            if input[5] < -0.5927634:
                if input[10] < -0.41060013:
                    var94 = 0.07311411
                else:
                    var94 = 0.32140028
            else:
                if input[0] < 0.2988183:
                    var94 = 0.123943925
                else:
                    var94 = -0.067338824
    else:
        if input[8] < -0.006805978:
            if input[2] < 0.4573739:
                if input[2] < 0.3487683:
                    var94 = -0.08302099
                else:
                    var94 = 0.2444633
            else:
                if input[2] < 0.9563578:
                    var94 = -0.2508431
                else:
                    var94 = -0.013029806
        else:
            if input[9] < 1.7348754:
                var94 = 0.19145282
            else:
                var94 = 0.004827678
    if input[9] < 1.5145398:
        if input[0] < 0.6566604:
            if input[8] < -0.006835503:
                if input[13] < 0.28920457:
                    var95 = 0.031885795
                else:
                    var95 = 0.35375893
            else:
                if input[2] < 0.53501093:
                    var95 = -0.07657086
                else:
                    var95 = 0.13504082
        else:
            if input[13] < 0.6978998:
                if input[9] < -0.33633816:
                    var95 = -0.08556014
                else:
                    var95 = 0.109716825
            else:
                if input[9] < 1.2243514:
                    var95 = -0.27525106
                else:
                    var95 = -0.064790905
    else:
        if input[8] < -0.006835458:
            if input[8] < -0.0068354984:
                if input[2] < -0.17403847:
                    var95 = -0.21787475
                else:
                    var95 = 0.08256639
            else:
                if input[0] < 0.93163615:
                    var95 = 0.30649054
                else:
                    var95 = -0.023876281
        else:
            if input[8] < -0.0068354234:
                if input[1] < 1.0214111:
                    var95 = -0.28767148
                else:
                    var95 = -0.018477287
            else:
                if input[2] < 1.804522:
                    var95 = 0.069865875
                else:
                    var95 = -0.12318016
    if input[4] < 0.14808951:
        if input[5] < -0.9416436:
            if input[7] < -0.6315361:
                if input[4] < -1.281309:
                    var96 = 0.022519127
                else:
                    var96 = 0.13897173
            else:
                if input[5] < -1.0302417:
                    var96 = -0.1600375
                else:
                    var96 = 0.119565845
        else:
            if input[4] < -0.6834313:
                if input[7] < -0.6641185:
                    var96 = -0.07956062
                else:
                    var96 = -0.3381517
            else:
                if input[5] < -0.45201948:
                    var96 = 0.06967926
                else:
                    var96 = -0.10450759
    else:
        if input[13] < 1.2388383:
            if input[10] < 2.442718:
                if input[13] < 1.0160463:
                    var96 = 0.08939326
                else:
                    var96 = 0.27782327
            else:
                var96 = -0.14443891
        else:
            if input[13] < 1.50183:
                if input[5] < 0.18233132:
                    var96 = -0.19967526
                else:
                    var96 = -0.00030228528
            else:
                if input[13] < 1.687849:
                    var96 = 0.14292574
                else:
                    var96 = -0.010774866
    if input[0] < 1.1091319:
        if input[0] < 0.9108674:
            if input[0] < 0.8579408:
                if input[0] < 0.8273091:
                    var97 = -0.022102421
                else:
                    var97 = 0.1653253
            else:
                if input[13] < 0.74281126:
                    var97 = 0.0054406966
                else:
                    var97 = -0.27575046
        else:
            if input[13] < 1.6341581:
                if input[5] < -0.32949618:
                    var97 = 0.015611565
                else:
                    var97 = 0.23869959
            else:
                var97 = -0.22246069
    else:
        if input[1] < 0.77546597:
            var97 = -0.2883544
        else:
            var97 = -0.02723388
    if input[2] < 1.5504389:
        if input[6] < -0.40789413:
            if input[6] < -0.44732547:
                if input[2] < 1.2135941:
                    var98 = 0.013538783
                else:
                    var98 = -0.20058188
            else:
                var98 = -0.25335306
        else:
            if input[7] < -0.34195733:
                var98 = 0.23012587
            else:
                if input[2] < 1.2525492:
                    var98 = -0.0027793339
                else:
                    var98 = 0.22503911
    else:
        var98 = -0.15905617
    if input[0] < 1.06175:
        if input[5] < 1.2008826:
            if input[9] < 1.8115458:
                if input[10] < 2.507656:
                    var99 = 0.013423838
                else:
                    var99 = -0.20445412
            else:
                if input[13] < 1.687849:
                    var99 = 0.24121971
                else:
                    var99 = 0.058529433
        else:
            var99 = -0.1804584
    else:
        if input[8] < -0.0068354676:
            var99 = -0.28198367
        else:
            if input[9] < 1.4334193:
                var99 = 0.13238592
            else:
                var99 = -0.12224726
    if input[0] < 0.6769307:
        if input[6] < 0.9661122:
            if input[1] < 0.83479214:
                if input[13] < 0.28920457:
                    var100 = -0.0129974615
                else:
                    var100 = 0.10522679
            else:
                if input[0] < 0.3821227:
                    var100 = 0.03178455
                else:
                    var100 = 0.2105434
        else:
            if input[6] < 1.34:
                var100 = -0.23773612
            else:
                var100 = 0.030884724
    else:
        if input[6] < 0.91278285:
            if input[6] < 0.5416555:
                if input[13] < 0.74281126:
                    var100 = -0.07996518
                else:
                    var100 = 0.036958933
            else:
                var100 = -0.2478807
        else:
            if input[0] < 0.94288284:
                if input[0] < 0.7862309:
                    var100 = 0.040011812
                else:
                    var100 = 0.27172095
            else:
                var100 = -0.04744942
    if input[8] < -0.006835495:
        if input[8] < -0.0068407496:
            if input[2] < 0.6471631:
                var101 = -0.17951693
            else:
                if input[0] < 0.85074407:
                    var101 = 0.14822142
                else:
                    var101 = -0.09857053
        else:
            if input[0] < 0.9108674:
                if input[0] < 0.71709514:
                    var101 = 0.071070015
                else:
                    var101 = -0.098144636
            else:
                if input[5] < -0.5177197:
                    var101 = 0.026504532
                else:
                    var101 = 0.3506635
    else:
        if input[5] < -0.8110718:
            if input[8] < -0.0068353303:
                if input[5] < -1.1368444:
                    var101 = -0.06796935
                else:
                    var101 = -0.24411042
            else:
                if input[2] < 1.1323689:
                    var101 = 0.16133457
                else:
                    var101 = -0.04653308
        else:
            if input[3] < 1.4605691:
                if input[5] < -0.49554357:
                    var101 = 0.13865708
                else:
                    var101 = -0.008905157
            else:
                if input[0] < 0.6103641:
                    var101 = 0.054049537
                else:
                    var101 = -0.25184625
    if input[9] < 1.822047:
        if input[10] < -0.41059917:
            if input[4] < -1.3210816:
                if input[2] < -0.95835245:
                    var102 = 0.03258872
                else:
                    var102 = 0.18389024
            else:
                if input[4] < -1.281309:
                    var102 = -0.17407112
                else:
                    var102 = 0.018828126
        else:
            if input[10] < 2.382575:
                if input[5] < -0.9811545:
                    var102 = -0.045052048
                else:
                    var102 = -0.34300038
            else:
                if input[9] < 1.2482135:
                    var102 = 0.26360255
                else:
                    var102 = -0.053652458
    else:
        var102 = -0.20272101
    if input[8] < -0.006650468:
        if input[13] < 1.8474704:
            if input[13] < 1.3935817:
                if input[12] < 2.3166804:
                    var103 = 0.013796696
                else:
                    var103 = -0.17539963
            else:
                if input[12] < 1.0223489:
                    var103 = -0.22227953
                else:
                    var103 = -0.008907607
        else:
            var103 = 0.17050974
    else:
        if input[9] < 1.7017324:
            if input[4] < 0.33419123:
                var103 = 0.025534237
            else:
                if input[4] < 0.54469585:
                    var103 = 0.25047848
                else:
                    var103 = 0.056894165
        else:
            var103 = -0.085097075
    if input[4] < -0.22871594:
        if input[13] < 1.1222622:
            if input[9] < -0.5114128:
                if input[4] < -0.8766022:
                    var104 = 0.036696743
                else:
                    var104 = -0.18673822
            else:
                if input[9] < 0.070187196:
                    var104 = 0.17286249
                else:
                    var104 = -0.0032096999
        else:
            if input[12] < 1.0223489:
                if input[4] < -0.8708309:
                    var104 = -0.34309924
                else:
                    var104 = -0.08772361
            else:
                if input[0] < 0.85074407:
                    var104 = 0.19145736
                else:
                    var104 = -0.16082092
    else:
        if input[13] < 0.28920457:
            if input[4] < -0.0412697:
                if input[4] < -0.15732077:
                    var104 = -0.063206814
                else:
                    var104 = -0.27036634
            else:
                if input[9] < 1.0633249:
                    var104 = 0.10314538
                else:
                    var104 = -0.10425155
        else:
            if input[3] < 2.4903069:
                if input[4] < 0.06557093:
                    var104 = 0.2076291
                else:
                    var104 = 0.052794077
            else:
                var104 = -0.13639285
    if input[0] < 1.1091319:
        if input[8] < -0.0068355026:
            if input[9] < -0.7429468:
                var105 = 0.17043723
            else:
                if input[7] < 0.34661782:
                    var105 = -0.1642468
                else:
                    var105 = 0.021417806
        else:
            if input[7] < 0.73803514:
                if input[7] < 0.43074575:
                    var105 = 0.018215042
                else:
                    var105 = -0.2087488
            else:
                if input[8] < -0.0067802416:
                    var105 = 0.13331227
                else:
                    var105 = -0.06821707
    else:
        if input[8] < -0.006831765:
            var105 = -0.22281435
        else:
            var105 = -0.0027899076
    if input[9] < 1.6950511:
        if input[0] < 0.6769307:
            if input[2] < 0.3487683:
                if input[2] < -0.19524366:
                    var106 = -0.0010943854
                else:
                    var106 = -0.10895693
            else:
                if input[2] < 1.1127981:
                    var106 = 0.14817935
                else:
                    var106 = -0.038546868
        else:
            if input[1] < 0.43661723:
                if input[0] < 0.6972216:
                    var106 = -0.26406392
                else:
                    var106 = 0.034194842
            else:
                if input[0] < 1.026025:
                    var106 = -0.16510849
                else:
                    var106 = 0.0109472005
    else:
        if input[1] < 0.83479214:
            if input[2] < -0.95835245:
                var106 = -0.060156226
            else:
                if input[13] < 1.5626355:
                    var106 = 0.29604557
                else:
                    var106 = 0.027543958
        else:
            if input[10] < 2.5066073:
                if input[9] < 1.750089:
                    var106 = 0.02890883
                else:
                    var106 = -0.2733474
            else:
                if input[1] < 1.4647803:
                    var106 = 0.15820052
                else:
                    var106 = -0.07696421
    if input[13] < 0.22608225:
        if input[0] < 0.047835745:
            var107 = -0.20979133
        else:
            var107 = 0.01115973
    else:
        if input[13] < 0.6978998:
            if input[13] < 0.28920457:
                if input[12] < 2.101891:
                    var107 = 0.050108783
                else:
                    var107 = -0.1398838
            else:
                var107 = 0.34731883
        else:
            if input[1] < 0.7546141:
                if input[12] < 1.0223489:
                    var107 = -0.025217295
                else:
                    var107 = 0.103878245
            else:
                if input[1] < 0.9810929:
                    var107 = -0.19850229
                else:
                    var107 = -0.011044498
    if input[4] < 0.8557113:
        if input[5] < 0.38356993:
            if input[7] < -1.2141986:
                if input[1] < 0.29511595:
                    var108 = -0.037720237
                else:
                    var108 = -0.2657227
            else:
                if input[5] < -1.2100307:
                    var108 = 0.1369253
                else:
                    var108 = -0.009841516
        else:
            if input[7] < 0.36593735:
                var108 = -0.024345296
            else:
                var108 = -0.30097383
    else:
        if input[5] < 1.058887:
            if input[2] < 1.1765547:
                var108 = 0.21923049
            else:
                if input[0] < 0.76141316:
                    var108 = -0.10533427
                else:
                    var108 = 0.09270862
        else:
            if input[13] < 1.590418:
                var108 = -0.1691073
            else:
                var108 = 0.09602853
    if input[8] < -0.0018464483:
        if input[4] < 0.54469585:
            if input[4] < -1.403248:
                if input[0] < 0.0059490376:
                    var109 = -0.022006601
                else:
                    var109 = -0.1308633
            else:
                if input[4] < -1.3210816:
                    var109 = 0.10897798
                else:
                    var109 = -0.0012482337
        else:
            if input[0] < 0.2988183:
                var109 = 0.098953135
            else:
                if input[1] < 1.5528419:
                    var109 = -0.17586344
                else:
                    var109 = 0.057648864
    else:
        var109 = 0.20147428
    if input[9] < -0.15212247:
        if input[6] < 0.2010502:
            if input[6] < -0.44732547:
                if input[6] < -0.62683386:
                    var110 = -0.04083813
                else:
                    var110 = 0.22490752
            else:
                var110 = -0.2982499
        else:
            if input[5] < 0.30458862:
                var110 = 0.22544229
            else:
                var110 = -0.065389045
    else:
        if input[5] < -0.17478432:
            if input[6] < -0.07649079:
                if input[9] < 0.12164811:
                    var110 = 0.18104781
                else:
                    var110 = -0.0070185396
            else:
                if input[0] < 0.8353082:
                    var110 = 0.28255853
                else:
                    var110 = 0.059057243
        else:
            if input[8] < -0.006835384:
                if input[8] < -0.0068354914:
                    var110 = -0.09523555
                else:
                    var110 = 0.14410041
            else:
                if input[9] < 1.7600975:
                    var110 = -0.18945543
                else:
                    var110 = 0.071584806
    if input[6] < -0.96713156:
        if input[6] < -1.0278823:
            if input[2] < 0.69766074:
                if input[2] < 0.058510546:
                    var111 = 0.0020541272
                else:
                    var111 = 0.18289612
            else:
                if input[8] < -0.0068354155:
                    var111 = -0.2807868
                else:
                    var111 = 0.0012170532
        else:
            if input[8] < -0.0068354853:
                var111 = -0.029696018
            else:
                var111 = -0.21546678
    else:
        if input[6] < -0.70555615:
            if input[10] < -0.4106002:
                if input[6] < -0.84264046:
                    var111 = 0.07030312
                else:
                    var111 = 0.2514803
            else:
                if input[10] < 2.5061638:
                    var111 = -0.0962508
                else:
                    var111 = 0.21773884
        else:
            if input[2] < 0.48329082:
                if input[8] < -0.006835482:
                    var111 = -0.0040240586
                else:
                    var111 = 0.14599565
            else:
                if input[2] < 0.804266:
                    var111 = -0.1286299
                else:
                    var111 = 0.01985777
    if input[9] < -0.6062229:
        if input[8] < -0.006835501:
            if input[8] < -0.0068355026:
                if input[9] < -0.7461136:
                    var112 = 0.15715657
                else:
                    var112 = -0.10097731
            else:
                var112 = 0.25061068
        else:
            if input[8] < -0.006835492:
                if input[2] < -0.5901068:
                    var112 = -0.20520088
                else:
                    var112 = 0.051741235
            else:
                if input[2] < 0.4411897:
                    var112 = 0.13059656
                else:
                    var112 = -0.051873304
    else:
        if input[9] < 0.6369434:
            if input[2] < -0.6188564:
                var112 = 0.07489322
            else:
                if input[6] < 0.2010502:
                    var112 = -0.14204729
                else:
                    var112 = 0.040561732
        else:
            if input[9] < 0.7167644:
                var112 = 0.25962105
            else:
                if input[8] < -0.006805978:
                    var112 = -0.030071635
                else:
                    var112 = 0.12848517
    if input[2] < 1.2135941:
        if input[2] < 0.6471631:
            if input[8] < -0.0068354853:
                if input[13] < 0.74281126:
                    var113 = -0.017337117
                else:
                    var113 = 0.13300559
            else:
                if input[6] < -1.003225:
                    var113 = 0.043107253
                else:
                    var113 = -0.10786855
        else:
            if input[13] < 1.3935817:
                if input[2] < 0.9328911:
                    var113 = 0.18025538
                else:
                    var113 = 0.035830036
            else:
                if input[12] < 2.1113806:
                    var113 = -0.21202028
                else:
                    var113 = 0.092219785
    else:
        if input[13] < 1.492855:
            if input[8] < -0.006834383:
                if input[2] < 1.3854071:
                    var113 = -0.03851768
                else:
                    var113 = -0.23563962
            else:
                if input[8] < -0.0067965165:
                    var113 = 0.07716833
                else:
                    var113 = -0.07689304
        else:
            var113 = 0.047182538
    if input[0] < -0.46057376:
        if input[0] < -1.220432:
            var114 = -0.048336428
        else:
            if input[8] < -0.006835501:
                var114 = 0.024199465
            else:
                var114 = 0.24693875
    else:
        if input[4] < -0.5650263:
            if input[1] < 0.6538668:
                if input[13] < 1.1028781:
                    var114 = 0.022565983
                else:
                    var114 = -0.17980807
            else:
                if input[2] < 0.7557201:
                    var114 = -0.24548443
                else:
                    var114 = 0.04636103
        else:
            if input[4] < -0.489813:
                var114 = 0.1762241
            else:
                if input[13] < 1.492855:
                    var114 = 0.026069945
                else:
                    var114 = -0.047392298
    if input[10] < 2.382575:
        if input[2] < -0.6188564:
            if input[1] < -0.58829534:
                if input[5] < -1.1576457:
                    var115 = 0.1185165
                else:
                    var115 = -0.056640163
            else:
                if input[4] < -1.3295172:
                    var115 = -0.07363352
                else:
                    var115 = 0.24334773
        else:
            if input[4] < -0.45805025:
                if input[4] < -0.9288848:
                    var115 = -0.00937996
                else:
                    var115 = -0.17963941
            else:
                if input[5] < -0.05742212:
                    var115 = 0.061559875
                else:
                    var115 = -0.077086486
    else:
        if input[5] < -0.69705915:
            if input[4] < -1.3941357:
                var115 = -0.035102613
            else:
                var115 = 0.26513144
        else:
            if input[4] < 0.33419123:
                if input[10] < 2.4958618:
                    var115 = 0.002629842
                else:
                    var115 = -0.20557676
            else:
                if input[1] < 1.0554007:
                    var115 = 0.13462475
                else:
                    var115 = -0.015541283
    if input[13] < 0.22608225:
        var116 = -0.139172
    else:
        if input[9] < -0.5596198:
            if input[2] < 0.7820636:
                if input[7] < -1.2141986:
                    var116 = -0.059461266
                else:
                    var116 = 0.177524
            else:
                var116 = -0.09318599
        else:
            if input[7] < -1.1603833:
                if input[5] < -1.1875198:
                    var116 = 0.045461543
                else:
                    var116 = -0.17972347
            else:
                if input[7] < -0.6315361:
                    var116 = 0.08338563
                else:
                    var116 = -0.014628664
    if input[2] < -0.5901068:
        if input[7] < -1.2489095:
            if input[1] < -0.58829534:
                if input[0] < -1.4037625:
                    var117 = 0.039978463
                else:
                    var117 = -0.11338441
            else:
                var117 = 0.23687118
        else:
            if input[7] < -0.9669772:
                if input[0] < 0.52041733:
                    var117 = -0.058647092
                else:
                    var117 = -0.26102903
            else:
                if input[0] < 0.32232428:
                    var117 = -0.112525016
                else:
                    var117 = 0.14385706
    else:
        if input[0] < 0.14350638:
            if input[0] < -0.0637564:
                if input[7] < -0.22367018:
                    var117 = -0.062501274
                else:
                    var117 = 0.14433166
            else:
                if input[7] < -0.03330895:
                    var117 = 0.21083274
                else:
                    var117 = 0.045380443
        else:
            if input[13] < 1.835705:
                if input[1] < 1.5152782:
                    var117 = 0.007936549
                else:
                    var117 = -0.14096516
            else:
                var117 = 0.13337514
    if input[0] < -0.15744999:
        if input[5] < -1.2537628:
            var118 = -0.09160994
        else:
            if input[5] < -0.5177197:
                if input[0] < -0.6424618:
                    var118 = 0.064307615
                else:
                    var118 = 0.28919876
            else:
                if input[7] < -0.2860102:
                    var118 = 0.084892645
                else:
                    var118 = -0.044074662
    else:
        if input[5] < -1.2243772:
            if input[9] < 1.5805223:
                if input[0] < 0.80133814:
                    var118 = 0.20520702
                else:
                    var118 = -0.011106715
            else:
                var118 = -0.08569565
        else:
            if input[7] < 0.37655345:
                if input[1] < 0.67603785:
                    var118 = -0.071652554
                else:
                    var118 = 0.03961313
            else:
                if input[10] < -0.41060022:
                    var118 = 0.09275469
                else:
                    var118 = -0.030898118
    if input[9] < -0.15212247:
        if input[6] < -0.90912175:
            if input[5] < -1.2453699:
                if input[0] < 0.6444517:
                    var119 = -0.039844517
                else:
                    var119 = -0.13567103
            else:
                if input[5] < -0.5927634:
                    var119 = 0.1140708
                else:
                    var119 = -0.12104809
        else:
            if input[9] < -0.7461136:
                if input[8] < -0.006835495:
                    var119 = 0.15276194
                else:
                    var119 = -0.08154142
            else:
                if input[8] < -0.006835482:
                    var119 = -0.2693969
                else:
                    var119 = 0.08007532
    else:
        if input[13] < 0.6978998:
            if input[13] < 0.28920457:
                if input[8] < -0.006835454:
                    var119 = -0.022100978
                else:
                    var119 = 0.17162806
            else:
                var119 = 0.28520313
        else:
            if input[1] < 0.869263:
                if input[9] < 1.6589736:
                    var119 = -0.0066688852
                else:
                    var119 = 0.14037055
            else:
                if input[13] < 1.1478108:
                    var119 = -0.18449718
                else:
                    var119 = 0.0024492687
    if input[2] < -0.95835245:
        if input[8] < -0.006835501:
            if input[5] < -0.5177197:
                if input[8] < -0.006835503:
                    var120 = -0.021761665
                else:
                    var120 = 0.10029345
            else:
                var120 = -0.09542439
        else:
            if input[5] < -0.55069077:
                if input[10] < 1.6360595:
                    var120 = -0.31962967
                else:
                    var120 = 0.050459635
            else:
                var120 = 0.022555355
    else:
        if input[2] < 1.4131434:
            if input[12] < 2.319605:
                if input[10] < 2.1036606:
                    var120 = 0.0112013295
                else:
                    var120 = 0.1313125
            else:
                if input[13] < 1.6341581:
                    var120 = -0.15065633
                else:
                    var120 = 0.06812772
        else:
            if input[13] < 0.42164645:
                var120 = 0.03749524
            else:
                var120 = -0.21751761
    if input[12] < 2.101891:
        if input[13] < 0.22608225:
            var121 = -0.24012452
        else:
            if input[13] < 1.2388383:
                if input[9] < 1.490532:
                    var121 = 0.075922765
                else:
                    var121 = -0.036538716
            else:
                if input[8] < -0.0018464483:
                    var121 = -0.089259386
                else:
                    var121 = 0.21199687
    else:
        if input[10] < 2.382575:
            if input[8] < -0.0068355002:
                var121 = 0.04173706
            else:
                if input[8] < -0.006835435:
                    var121 = -0.30564195
                else:
                    var121 = 0.017744426
        else:
            if input[9] < 1.2234561:
                var121 = 0.15494876
            else:
                if input[10] < 2.505111:
                    var121 = -0.080943145
                else:
                    var121 = 0.039348133
    if input[5] < -0.042666703:
        if input[4] < -0.1578047:
            if input[5] < -0.39574036:
                if input[6] < -0.044094507:
                    var122 = -0.03128721
                else:
                    var122 = 0.15829356
            else:
                if input[1] < 0.0015661381:
                    var122 = -0.019469505
                else:
                    var122 = -0.19740012
        else:
            if input[4] < 0.54469585:
                if input[1] < 0.92965716:
                    var122 = 0.19668782
                else:
                    var122 = -0.008862511
            else:
                var122 = -0.087095074
    else:
        if input[4] < 0.5235074:
            if input[0] < 0.08993629:
                var122 = 0.036217544
            else:
                if input[6] < 0.6381288:
                    var122 = -0.23624225
                else:
                    var122 = -0.056108642
        else:
            if input[0] < 0.5402825:
                if input[4] < 1.1437447:
                    var122 = 0.18316717
                else:
                    var122 = -0.040670037
            else:
                if input[0] < 0.8273091:
                    var122 = -0.16136801
                else:
                    var122 = 0.054284226
    if input[0] < 0.85074407:
        if input[7] < -0.49266136:
            if input[2] < 0.68724954:
                if input[2] < 0.3487683:
                    var123 = -0.022017965
                else:
                    var123 = 0.19461702
            else:
                if input[9] < -0.28873575:
                    var123 = 0.022010928
                else:
                    var123 = -0.1623866
        else:
            if input[2] < 0.29621428:
                if input[2] < -0.37227365:
                    var123 = 0.14217883
                else:
                    var123 = -0.09044676
            else:
                if input[9] < -0.42017102:
                    var123 = -0.0633089
                else:
                    var123 = 0.15253447
    else:
        if input[2] < -0.059206758:
            if input[9] < 0.03762857:
                var123 = 0.16773525
            else:
                var123 = -0.07058339
        else:
            if input[2] < 0.804266:
                if input[2] < 0.5216473:
                    var123 = -0.054704845
                else:
                    var123 = -0.24964519
            else:
                if input[12] < 2.1113806:
                    var123 = -0.05863134
                else:
                    var123 = 0.09612062
    if input[0] < 0.14350638:
        if input[2] < -0.95835245:
            if input[9] < 0.7167644:
                var124 = 0.08024388
            else:
                if input[0] < -0.7257661:
                    var124 = 0.0073694736
                else:
                    var124 = -0.22367826
        else:
            if input[9] < -0.7429468:
                var124 = -0.07916217
            else:
                if input[10] < -0.41060024:
                    var124 = 0.23684469
                else:
                    var124 = -0.019330217
    else:
        if input[4] < -1.1391929:
            if input[0] < 0.94288284:
                if input[4] < -1.3991427:
                    var124 = 0.027224159
                else:
                    var124 = -0.23118192
            else:
                if input[9] < 0.03762857:
                    var124 = 0.16165017
                else:
                    var124 = 0.021925442
        else:
            if input[0] < 1.0111444:
                if input[0] < 0.2642378:
                    var124 = -0.1310336
                else:
                    var124 = 0.033590667
            else:
                if input[2] < 1.2525492:
                    var124 = -0.18324117
                else:
                    var124 = 0.06307354
    if input[13] < 0.28920457:
        if input[5] < -0.6253229:
            if input[5] < -0.90171605:
                if input[7] < -0.5568832:
                    var125 = 0.02945507
                else:
                    var125 = -0.2253221
            else:
                if input[2] < -0.5901068:
                    var125 = -0.011930066
                else:
                    var125 = 0.20668808
        else:
            if input[2] < -0.19524366:
                if input[7] < -0.6502011:
                    var125 = -0.06738461
                else:
                    var125 = 0.085161276
            else:
                if input[7] < 0.84630895:
                    var125 = -0.19817759
                else:
                    var125 = 0.07110231
    else:
        if input[7] < 0.9095547:
            if input[5] < -1.1465526:
                if input[5] < -1.2352456:
                    var125 = 0.12390239
                else:
                    var125 = -0.15125144
            else:
                if input[9] < 1.5805223:
                    var125 = 0.025976138
                else:
                    var125 = 0.1585688
        else:
            if input[9] < 1.6589736:
                var125 = -0.20577596
            else:
                if input[10] < 2.5057251:
                    var125 = 0.09981011
                else:
                    var125 = -0.08357974
    if input[0] < -0.75076395:
        var126 = 0.115125686
    else:
        if input[0] < -0.38725874:
            var126 = -0.16713622
        else:
            if input[5] < -0.9507243:
                if input[0] < 0.25316742:
                    var126 = 0.18236032
                else:
                    var126 = 0.009819018
            else:
                if input[5] < -0.8584019:
                    var126 = -0.18043774
                else:
                    var126 = -0.004417528
    if input[8] < -0.0068355007:
        if input[9] < 0.8662545:
            if input[9] < -0.11771153:
                if input[9] < -0.7461136:
                    var127 = 0.051648177
                else:
                    var127 = -0.09614408
            else:
                var127 = 0.16862457
        else:
            if input[6] < 0.89751637:
                if input[1] < 0.77546597:
                    var127 = -0.20824465
                else:
                    var127 = -0.01220889
            else:
                var127 = 0.061319955
    else:
        if input[1] < 1.324422:
            if input[1] < 1.2080598:
                if input[1] < 1.0728456:
                    var127 = 0.027874883
                else:
                    var127 = -0.104361475
            else:
                var127 = 0.17364398
        else:
            if input[8] < -0.006834695:
                var127 = -0.15915956
            else:
                var127 = 0.022472499
    if input[5] < -0.15201722:
        if input[5] < -0.37438735:
            if input[0] < 0.8579408:
                if input[0] < -0.0637564:
                    var128 = -0.08688762
                else:
                    var128 = 0.034185823
            else:
                if input[5] < -1.179925:
                    var128 = 0.045687113
                else:
                    var128 = -0.122190155
        else:
            if input[4] < -0.15797976:
                var128 = -0.09617705
            else:
                if input[0] < 0.7118067:
                    var128 = 0.22284509
                else:
                    var128 = 0.06842286
    else:
        if input[4] < 1.0666775:
            if input[0] < 0.08993629:
                var128 = 0.045012858
            else:
                if input[2] < -0.37227365:
                    var128 = -0.031724773
                else:
                    var128 = -0.1708624
        else:
            if input[2] < 0.83458704:
                var128 = 0.13137327
            else:
                var128 = -0.036597185
    if input[13] < 0.22608225:
        var129 = -0.11967838
    else:
        if input[13] < 0.6978998:
            if input[4] < -1.3991427:
                var129 = -0.075162426
            else:
                if input[4] < -1.3295172:
                    var129 = 0.2641119
                else:
                    var129 = 0.052764658
        else:
            if input[3] < 2.4903069:
                if input[2] < -0.17403847:
                    var129 = -0.04382119
                else:
                    var129 = 0.039676405
            else:
                var129 = -0.12858622
    if input[8] < -0.006835371:
        if input[9] < 1.7724895:
            if input[9] < 1.6950511:
                if input[8] < -0.006835435:
                    var130 = -0.013937542
                else:
                    var130 = 0.13600948
            else:
                if input[8] < -0.006835479:
                    var130 = 0.04058085
                else:
                    var130 = 0.23513232
        else:
            if input[6] < -0.044094507:
                var130 = -0.011185976
            else:
                var130 = -0.18785839
    else:
        if input[0] < -0.23248516:
            var130 = 0.12047797
        else:
            if input[0] < 0.9521798:
                if input[9] < 1.7600975:
                    var130 = -0.14364
                else:
                    var130 = 0.06646646
            else:
                if input[13] < 1.5626355:
                    var130 = 0.1166368
                else:
                    var130 = -0.09370416
    if input[0] < 1.1091319:
        if input[5] < 1.058887:
            if input[4] < 0.1739507:
                if input[13] < 1.5305066:
                    var131 = 0.011928636
                else:
                    var131 = -0.1667597
            else:
                if input[13] < 1.3935817:
                    var131 = 0.104260124
                else:
                    var131 = -0.0086307665
        else:
            var131 = -0.12837093
    else:
        var131 = -0.12830268
    if input[13] < 0.22608225:
        var132 = -0.11242226
    else:
        if input[1] < 1.6518167:
            if input[7] < -1.2141986:
                if input[1] < 0.034333866:
                    var132 = -0.005571428
                else:
                    var132 = -0.18654704
            else:
                if input[1] < -0.20618671:
                    var132 = 0.09514758
                else:
                    var132 = 0.0020195495
        else:
            var132 = -0.10817819
    if input[0] < 0.4959279:
        if input[9] < 1.6660888:
            if input[9] < 1.5422175:
                if input[9] < 1.4777132:
                    var133 = 0.04755323
                else:
                    var133 = -0.13958627
            else:
                var133 = 0.18449146
        else:
            if input[2] < -0.19524366:
                var133 = 0.012944874
            else:
                var133 = -0.13814166
    else:
        if input[13] < 1.0160463:
            if input[9] < 1.2688061:
                if input[2] < -0.19524366:
                    var133 = 0.09196302
                else:
                    var133 = -0.053287063
            else:
                if input[13] < 0.74281126:
                    var133 = -0.21496285
                else:
                    var133 = 0.034259617
        else:
            if input[5] < -0.65704286:
                if input[9] < 1.6111577:
                    var133 = -0.23373246
                else:
                    var133 = 0.07332339
            else:
                if input[13] < 1.492855:
                    var133 = 0.1460457
                else:
                    var133 = -0.060537796
    if input[9] < -0.22513607:
        if input[10] < -0.41059995:
            if input[5] < -1.227564:
                var134 = -0.17197701
            else:
                if input[5] < -1.1576457:
                    var134 = 0.09161611
                else:
                    var134 = -0.09640049
        else:
            var134 = 0.17740795
    else:
        if input[9] < -0.15113139:
            var134 = 0.1891553
        else:
            if input[5] < -0.042666703:
                if input[9] < 1.2224033:
                    var134 = -0.053165086
                else:
                    var134 = 0.043161795
            else:
                if input[7] < 0.69908196:
                    var134 = -0.13474175
                else:
                    var134 = 0.013699177
    if input[7] < -1.1946146:
        if input[7] < -1.2453837:
            if input[4] < -0.26102656:
                if input[4] < -1.3210816:
                    var135 = 0.027411712
                else:
                    var135 = -0.12479495
            else:
                if input[4] < 0.54469585:
                    var135 = 0.12401664
                else:
                    var135 = -0.009716069
        else:
            var135 = 0.16260381
    else:
        if input[4] < -1.281309:
            if input[7] < -1.1603833:
                var135 = -0.16645314
            else:
                var135 = -0.031224782
        else:
            if input[6] < -0.90912175:
                if input[4] < -1.0307143:
                    var135 = 0.10984134
                else:
                    var135 = -0.021265607
            else:
                if input[7] < -0.49266136:
                    var135 = -0.09752132
                else:
                    var135 = 0.0024890439
    if input[8] < -0.006312158:
        if input[13] < 1.2388383:
            if input[2] < 1.0270487:
                if input[8] < -0.006835095:
                    var136 = 0.0031275821
                else:
                    var136 = 0.11942108
            else:
                if input[4] < 0.08713068:
                    var136 = -0.21406253
                else:
                    var136 = 0.034908783
        else:
            if input[2] < 1.2681168:
                if input[7] < -0.70143986:
                    var136 = 0.02040164
                else:
                    var136 = -0.14838268
            else:
                var136 = 0.12598096
    else:
        if input[9] < 1.6589736:
            var136 = 0.15989605
        else:
            var136 = 0.0015206699
    if input[6] < -0.96713156:
        if input[0] < 0.21107648:
            if input[0] < -0.18721929:
                if input[0] < -0.8252662:
                    var137 = 0.03970535
                else:
                    var137 = -0.15527639
            else:
                var137 = 0.17621122
        else:
            if input[0] < 0.57769847:
                if input[2] < -0.41731828:
                    var137 = -0.042431932
                else:
                    var137 = -0.18581079
            else:
                if input[2] < -0.17403847:
                    var137 = -0.12528071
                else:
                    var137 = 0.03431543
    else:
        if input[0] < -0.15744999:
            var137 = 0.14064541
        else:
            if input[0] < -0.0637564:
                var137 = -0.16279471
            else:
                if input[6] < -0.6686235:
                    var137 = 0.1043597
                else:
                    var137 = 0.00652313
    if input[9] < 1.5308678:
        if input[5] < 0.20184647:
            if input[1] < 1.324422:
                if input[0] < 0.9108674:
                    var138 = -0.010973726
                else:
                    var138 = 0.08674969
            else:
                var138 = -0.14300479
        else:
            if input[0] < 0.106255814:
                var138 = -0.005698403
            else:
                if input[9] < 0.74165624:
                    var138 = -0.23000371
                else:
                    var138 = -0.013307855
    else:
        if input[9] < 1.7724895:
            if input[12] < 2.3365333:
                if input[1] < -0.19111514:
                    var138 = 0.003795512
                else:
                    var138 = 0.1342192
            else:
                var138 = -0.05636047
        else:
            if input[10] < 2.5081012:
                if input[5] < -0.042666703:
                    var138 = -0.13328192
                else:
                    var138 = 0.01448729
            else:
                var138 = 0.08699022
    if input[13] < 1.835705:
        if input[13] < 1.7146859:
            if input[10] < 2.507151:
                if input[10] < 2.5052075:
                    var139 = 0.0018625434
                else:
                    var139 = 0.13204227
            else:
                var139 = -0.099800974
        else:
            var139 = -0.14782532
    else:
        var139 = 0.10682711
    if input[1] < 0.034333866:
        if input[5] < 0.68092704:
            if input[8] < -0.006835482:
                if input[8] < -0.006835501:
                    var140 = 0.056189332
                else:
                    var140 = 0.20413876
            else:
                if input[5] < -1.179925:
                    var140 = 0.11979547
                else:
                    var140 = -0.056455765
        else:
            var140 = -0.15513611
    else:
        if input[1] < 0.062419575:
            if input[8] < -0.006835496:
                var140 = -0.19847514
            else:
                var140 = -0.05187038
        else:
            if input[7] < -1.0306627:
                if input[2] < -0.3236507:
                    var140 = -0.20566475
                else:
                    var140 = 0.01925894
            else:
                if input[1] < 0.43661723:
                    var140 = 0.12216297
                else:
                    var140 = -0.019514035
    if input[1] < 0.77546597:
        if input[1] < 0.034333866:
            if input[4] < 0.65659267:
                if input[7] < -0.49266136:
                    var141 = -0.0022667393
                else:
                    var141 = 0.14305054
            else:
                var141 = -0.10847308
        else:
            if input[0] < 0.35027266:
                if input[0] < 0.16558947:
                    var141 = -0.04420317
                else:
                    var141 = 0.112128876
            else:
                if input[0] < 0.703657:
                    var141 = -0.22146618
                else:
                    var141 = -0.033611678
    else:
        if input[2] < 0.90760964:
            if input[2] < 0.7330813:
                if input[4] < 0.25010833:
                    var141 = -0.055691592
                else:
                    var141 = 0.13216498
            else:
                var141 = 0.20640677
        else:
            if input[2] < 1.2525492:
                if input[4] < 0.21451432:
                    var141 = -0.14125745
                else:
                    var141 = 0.026074458
            else:
                if input[7] < 1.126962:
                    var141 = 0.114745945
                else:
                    var141 = -0.053387217
    if input[9] < -0.39408252:
        if input[10] < -0.41059995:
            if input[9] < -0.7461136:
                if input[1] < 0.34937596:
                    var142 = -0.04433472
                else:
                    var142 = 0.0846244
            else:
                if input[6] < 0.073765375:
                    var142 = -0.17081572
                else:
                    var142 = 0.038004283
        else:
            var142 = 0.12445127
    else:
        if input[9] < 1.2482135:
            if input[0] < 0.15436739:
                if input[1] < -0.20618671:
                    var142 = 0.03629845
                else:
                    var142 = -0.11986794
            else:
                if input[6] < -1.085832:
                    var142 = -0.03693281
                else:
                    var142 = 0.18394089
        else:
            if input[9] < 1.5422175:
                if input[6] < 0.5156219:
                    var142 = -0.11222293
                else:
                    var142 = 0.06271813
            else:
                if input[0] < 0.94288284:
                    var142 = 0.04785
                else:
                    var142 = -0.06113373
    if input[5] < 0.20184647:
        if input[0] < 0.76141316:
            if input[12] < 2.101891:
                if input[4] < 0.16642691:
                    var143 = 0.057878155
                else:
                    var143 = 0.20596166
            else:
                if input[4] < -0.8357657:
                    var143 = 0.055598047
                else:
                    var143 = -0.15928577
        else:
            if input[8] < -0.0068355016:
                if input[7] < 0.36593735:
                    var143 = -0.14715536
                else:
                    var143 = 0.044519324
            else:
                if input[8] < -0.0068354965:
                    var143 = 0.20200203
                else:
                    var143 = -0.036149476
    else:
        if input[4] < 1.2271833:
            if input[0] < 0.106255814:
                var143 = 0.009322091
            else:
                if input[8] < -0.006835502:
                    var143 = -0.016276665
                else:
                    var143 = -0.19159143
        else:
            if input[5] < 1.1505239:
                var143 = 0.094793916
            else:
                var143 = -0.03488786
    if input[2] < -0.95835245:
        if input[13] < 0.28920457:
            if input[8] < -0.006835501:
                var144 = -0.0675239
            else:
                var144 = -0.22315754
        else:
            if input[6] < -0.7386071:
                var144 = -0.029057804
            else:
                var144 = 0.1370179
    else:
        if input[12] < 2.1113806:
            if input[2] < 0.5216473:
                if input[3] < -0.28603184:
                    var144 = 0.010680369
                else:
                    var144 = 0.1484881
            else:
                if input[0] < 0.7118067:
                    var144 = 0.0039816564
                else:
                    var144 = -0.11370879
        else:
            if input[2] < 0.604416:
                if input[13] < 1.2817653:
                    var144 = -0.11907681
                else:
                    var144 = 0.040997416
            else:
                if input[6] < -0.0145435035:
                    var144 = 0.18040645
                else:
                    var144 = -0.009479317
    if input[7] < -0.75020075:
        if input[5] < -1.0217454:
            if input[9] < -0.6890961:
                if input[7] < -1.1744171:
                    var145 = 0.039138805
                else:
                    var145 = -0.19976872
            else:
                if input[7] < -1.1603833:
                    var145 = -0.044031993
                else:
                    var145 = 0.1463681
        else:
            if input[4] < -0.8718712:
                if input[6] < -0.8518107:
                    var145 = -0.02620533
                else:
                    var145 = -0.22781034
            else:
                if input[4] < -0.7154066:
                    var145 = 0.1058336
                else:
                    var145 = -0.08615744
    else:
        if input[7] < -0.6315361:
            var145 = 0.18107645
        else:
            if input[7] < -0.5452448:
                var145 = -0.10415961
            else:
                if input[6] < -0.71865964:
                    var145 = 0.10720846
                else:
                    var145 = 0.002042647
    if input[8] < -0.0068350383:
        if input[8] < -0.006835384:
            if input[10] < 2.5071113:
                if input[7] < -0.68131304:
                    var146 = -0.029279789
                else:
                    var146 = 0.044951264
            else:
                var146 = -0.118682206
        else:
            var146 = -0.13927925
    else:
        if input[3] < -0.28603184:
            if input[8] < -0.006805978:
                if input[7] < -0.56804717:
                    var146 = 0.07448133
                else:
                    var146 = -0.037114415
            else:
                if input[5] < 0.0940958:
                    var146 = 0.232066
                else:
                    var146 = 0.06421127
        else:
            if input[5] < -0.67827624:
                var146 = 0.123816386
            else:
                if input[5] < -0.36501423:
                    var146 = -0.14962162
                else:
                    var146 = -0.04246641
    var147 = var91 + var92 + var93 + var94 + var95 + var96 + var97 + var98 + var99 + var100 + var101 + var102 + var103 + var104 + var105 + var106 + var107 + var108 + var109 + var110 + var111 + var112 + var113 + var114 + var115 + var116 + var117 + var118 + var119 + var120 + var121 + var122 + var123 + var124 + var125 + var126 + var127 + var128 + var129 + var130 + var131 + var132 + var133 + var134 + var135 + var136 + var137 + var138 + var139 + var140 + var141 + var142 + var143 + var144 + var145 + var146
    if input[1] < -0.20618671:
        if input[9] < 1.3624849:
            if input[9] < 1.1932384:
                if input[13] < 0.6978998:
                    var148 = 0.054404117
                else:
                    var148 = -0.09572576
            else:
                var148 = 0.16464342
        else:
            if input[5] < -0.21761355:
                var148 = -0.14729625
            else:
                var148 = 0.042839658
    else:
        if input[1] < -0.19111514:
            if input[6] < -0.9797135:
                var148 = 0.037902683
            else:
                if input[5] < -0.5334082:
                    var148 = -0.27717853
                else:
                    var148 = 0.013575227
        else:
            if input[9] < 1.5641677:
                if input[9] < 0.7167644:
                    var148 = 0.025753576
                else:
                    var148 = -0.09092911
            else:
                if input[1] < 0.7073565:
                    var148 = 0.077420324
                else:
                    var148 = -0.002533551
    if input[8] < -0.0068354737:
        if input[7] < -0.14347778:
            if input[0] < 0.80133814:
                if input[0] < -0.30016658:
                    var149 = -0.07579005
                else:
                    var149 = 0.09665967
            else:
                if input[8] < -0.006835498:
                    var149 = 0.025703108
                else:
                    var149 = -0.23123622
        else:
            if input[4] < 0.28472766:
                if input[5] < -0.5927634:
                    var149 = 0.02022701
                else:
                    var149 = -0.19331695
            else:
                if input[5] < 0.5861062:
                    var149 = 0.120866254
                else:
                    var149 = -0.10165997
    else:
        if input[8] < -0.006835469:
            var149 = 0.19575235
        else:
            if input[4] < 0.14808951:
                if input[5] < -1.0959983:
                    var149 = 0.071711
                else:
                    var149 = -0.10037512
            else:
                if input[10] < 2.4408193:
                    var149 = 0.10966242
                else:
                    var149 = -0.055459462
    if input[2] < 1.2135941:
        if input[2] < 0.29621428:
            if input[7] < 0.6566812:
                if input[7] < 0.14395873:
                    var150 = -0.0011524307
                else:
                    var150 = -0.13970168
            else:
                var150 = 0.077903904
        else:
            if input[5] < 0.4350262:
                if input[0] < 1.0374212:
                    var150 = 0.11513707
                else:
                    var150 = -0.036171693
            else:
                var150 = -0.06733817
    else:
        if input[7] < 0.6566812:
            var150 = -0.16519707
        else:
            if input[5] < -0.21761355:
                var150 = 0.07980421
            else:
                var150 = -0.05807777
    if input[8] < -0.006312158:
        if input[10] < 2.5052075:
            if input[10] < 2.4684017:
                if input[9] < -0.15212247:
                    var151 = -0.064655125
                else:
                    var151 = 0.00065393595
            else:
                var151 = -0.11887017
        else:
            if input[8] < -0.006836816:
                var151 = -0.03884615
            else:
                if input[1] < 0.9810929:
                    var151 = 0.025807196
                else:
                    var151 = 0.13497537
    else:
        var151 = 0.10792084
    if input[13] < 0.6978998:
        if input[13] < 0.22608225:
            var152 = -0.093254514
        else:
            if input[12] < 2.101891:
                if input[4] < -1.3210816:
                    var152 = 0.27403972
                else:
                    var152 = 0.040150415
            else:
                if input[4] < -1.0602969:
                    var152 = -0.13216284
                else:
                    var152 = 0.06907624
    else:
        if input[13] < 0.74281126:
            if input[6] < -0.92802566:
                var152 = 0.053857524
            else:
                if input[4] < -0.38390496:
                    var152 = -0.1980052
                else:
                    var152 = -0.029866379
        else:
            if input[8] < -0.006835458:
                if input[8] < -0.006835479:
                    var152 = 0.011072302
                else:
                    var152 = 0.18335618
            else:
                if input[12] < 2.3260922:
                    var152 = -0.08870527
                else:
                    var152 = 0.07497663
    if input[4] < -1.0846173:
        if input[8] < -0.0068354155:
            if input[7] < -1.0193774:
                if input[8] < -0.006835482:
                    var153 = 0.0058917534
                else:
                    var153 = -0.13122629
            else:
                var153 = -0.21466912
        else:
            var153 = 0.07112339
    else:
        if input[7] < 0.49714535:
            if input[3] < 1.4605691:
                if input[9] < 1.7087642:
                    var153 = 0.06499204
                else:
                    var153 = -0.051220365
            else:
                if input[8] < -0.006650468:
                    var153 = -0.12517974
                else:
                    var153 = -0.006312669
        else:
            if input[4] < 0.50758463:
                if input[7] < 0.62571764:
                    var153 = -0.2104224
                else:
                    var153 = -0.03621954
            else:
                if input[7] < 0.9095547:
                    var153 = 0.10621355
                else:
                    var153 = -0.05478823
    if input[1] < -0.20618671:
        if input[2] < 1.1765547:
            if input[9] < -0.05907872:
                if input[4] < -0.70976:
                    var154 = 0.046644934
                else:
                    var154 = -0.064975716
            else:
                if input[9] < 1.2482135:
                    var154 = 0.21813317
                else:
                    var154 = -0.0007300739
        else:
            var154 = -0.050057586
    else:
        if input[4] < 1.0388232:
            if input[4] < -0.9817037:
                if input[9] < -0.6890961:
                    var154 = -0.08640549
                else:
                    var154 = 0.0700219
            else:
                if input[1] < 0.062419575:
                    var154 = -0.14000435
                else:
                    var154 = -0.025616242
        else:
            if input[9] < 1.6589736:
                var154 = 0.004608866
            else:
                var154 = 0.095547125
    if input[0] < 0.25316742:
        if input[0] < -0.0637564:
            if input[13] < 0.9564157:
                if input[4] < -0.8523621:
                    var155 = -0.027378522
                else:
                    var155 = 0.11999124
            else:
                var155 = -0.08072858
        else:
            if input[5] < 0.0940958:
                var155 = 0.18832678
            else:
                var155 = -0.018343212
    else:
        if input[4] < -1.1582835:
            if input[0] < 0.9521798:
                if input[4] < -1.3210816:
                    var155 = -0.021461945
                else:
                    var155 = -0.24802007
            else:
                var155 = 0.031938385
        else:
            if input[5] < -0.26141685:
                if input[13] < 1.492855:
                    var155 = 0.058712225
                else:
                    var155 = -0.07976115
            else:
                if input[0] < 0.8273091:
                    var155 = -0.09440127
                else:
                    var155 = 0.028587947
    if input[13] < 0.22608225:
        var156 = -0.09684328
    else:
        if input[5] < -1.179925:
            if input[7] < -1.2489095:
                var156 = 0.11915487
            else:
                if input[7] < -1.2141986:
                    var156 = -0.11541218
                else:
                    var156 = 0.06814243
        else:
            if input[4] < -0.43716282:
                if input[10] < 2.4875195:
                    var156 = -0.061141767
                else:
                    var156 = 0.06428897
            else:
                if input[10] < -0.4106002:
                    var156 = 0.032314498
                else:
                    var156 = -0.049955256
    if input[12] < 2.1113806:
        if input[13] < 1.3935817:
            if input[6] < -1.1233191:
                if input[4] < 0.33419123:
                    var157 = -0.09069392
                else:
                    var157 = 0.018273918
            else:
                if input[8] < -0.006834383:
                    var157 = 0.0012418446
                else:
                    var157 = 0.15656468
        else:
            if input[8] < -0.006805978:
                var157 = -0.19982676
            else:
                var157 = 0.025177851
    else:
        if input[13] < 1.1478108:
            var157 = -0.04872854
        else:
            if input[1] < 1.324422:
                var157 = 0.117171645
            else:
                var157 = 0.013615194
    if input[10] < 2.382575:
        if input[7] < -0.49266136:
            if input[7] < -1.1744171:
                if input[5] < -0.5564768:
                    var158 = 0.039418157
                else:
                    var158 = -0.07855837
            else:
                if input[1] < -0.19111514:
                    var158 = -0.1233812
                else:
                    var158 = -0.021754472
        else:
            if input[8] < -0.006835492:
                if input[1] < 0.3337534:
                    var158 = 0.01932115
                else:
                    var158 = -0.11731234
            else:
                if input[1] < 0.7546141:
                    var158 = 0.14355291
                else:
                    var158 = -0.042287264
    else:
        if input[1] < 0.43661723:
            if input[7] < -1.2453837:
                var158 = -0.020464987
            else:
                var158 = 0.17789553
        else:
            if input[1] < 0.9810929:
                var158 = -0.12353739
            else:
                if input[1] < 1.4759517:
                    var158 = 0.115745984
                else:
                    var158 = -0.06622515
    if input[0] < 0.80133814:
        if input[13] < 0.28920457:
            if input[0] < 0.028297966:
                if input[0] < -0.6424618:
                    var159 = -0.041427307
                else:
                    var159 = 0.10951926
            else:
                if input[7] < -0.5568832:
                    var159 = 0.011299741
                else:
                    var159 = -0.12851672
        else:
            if input[2] < 0.69766074:
                if input[2] < -0.17403847:
                    var159 = 0.010334666
                else:
                    var159 = 0.12858424
            else:
                if input[7] < -0.14347778:
                    var159 = -0.15047202
                else:
                    var159 = 0.06996852
    else:
        if input[1] < 0.5925646:
            if input[7] < -1.0306627:
                var159 = -0.097113445
            else:
                if input[2] < -0.024409572:
                    var159 = -0.056392573
                else:
                    var159 = 0.11159762
        else:
            if input[2] < 1.0084318:
                if input[2] < 0.39464492:
                    var159 = -0.008807252
                else:
                    var159 = -0.19009206
            else:
                if input[0] < 0.96959627:
                    var159 = 0.053308867
                else:
                    var159 = -0.040186435
    if input[0] < 1.06175:
        if input[6] < 1.2585163:
            if input[6] < 0.85395443:
                if input[2] < 0.69766074:
                    var160 = 0.021459093
                else:
                    var160 = -0.03875914
            else:
                if input[2] < 0.5726871:
                    var160 = -0.0025830725
                else:
                    var160 = 0.16227125
        else:
            var160 = -0.10946724
    else:
        if input[1] < 0.44565043:
            var160 = -0.14898376
        else:
            var160 = 0.0036612153
    if input[6] < 0.17379436:
        if input[4] < -1.0846173:
            if input[6] < -0.995029:
                if input[12] < 2.101891:
                    var161 = 0.08516075
                else:
                    var161 = -0.049026318
            else:
                var161 = -0.14052257
        else:
            if input[8] < -0.006835463:
                if input[10] < -0.4105998:
                    var161 = 0.1254469
                else:
                    var161 = -0.015854595
            else:
                if input[8] < -0.0068345475:
                    var161 = -0.10120633
                else:
                    var161 = 0.046987053
    else:
        if input[6] < 1.1181712:
            if input[4] < 0.18075894:
                if input[4] < -0.07338943:
                    var161 = -0.041517805
                else:
                    var161 = 0.07656111
            else:
                if input[4] < 0.8404195:
                    var161 = -0.1869444
                else:
                    var161 = -0.0042556105
        else:
            if input[2] < 0.68724954:
                var161 = -0.046569977
            else:
                var161 = 0.10677283
    if input[4] < 0.90625846:
        if input[5] < 0.4350262:
            if input[5] < -0.911279:
                if input[4] < -1.281309:
                    var162 = -0.024255522
                else:
                    var162 = 0.08750775
            else:
                if input[5] < -0.8234782:
                    var162 = -0.14284818
                else:
                    var162 = 0.0034453312
        else:
            var162 = -0.13170244
    else:
        if input[2] < 0.53501093:
            var162 = 0.14130758
        else:
            if input[5] < 0.7251524:
                var162 = 0.050710455
            else:
                var162 = -0.06719959
    if input[12] < 2.3839366:
        if input[12] < 2.1113806:
            if input[6] < -1.1233191:
                if input[8] < -0.006834695:
                    var163 = -0.09289244
                else:
                    var163 = 0.00009760985
            else:
                if input[6] < -1.0317743:
                    var163 = 0.099033274
                else:
                    var163 = 0.00866101
        else:
            if input[2] < 0.5216473:
                var163 = 0.003570735
            else:
                var163 = 0.14132556
    else:
        if input[10] < 2.5079968:
            var163 = -0.1397208
        else:
            var163 = 0.059549067
    if input[2] < 1.5504389:
        if input[2] < 1.061175:
            if input[13] < 1.2388383:
                if input[9] < -0.42017102:
                    var164 = -0.032984067
                else:
                    var164 = 0.0417106
            else:
                if input[12] < 1.0223489:
                    var164 = -0.11787982
                else:
                    var164 = 0.004455594
        else:
            if input[13] < 1.0160463:
                if input[2] < 1.2316387:
                    var164 = 0.04497823
                else:
                    var164 = -0.0565699
            else:
                var164 = 0.13476026
    else:
        var164 = -0.091505535
    if input[9] < -0.7461136:
        if input[13] < 0.22608225:
            var165 = -0.06255719
        else:
            if input[8] < -0.0068354798:
                var165 = 0.16951461
            else:
                var165 = 0.022052865
    else:
        if input[9] < -0.22513607:
            if input[6] < 0.17379436:
                if input[8] < -0.0068354835:
                    var165 = -0.1510989
                else:
                    var165 = 0.002190927
            else:
                var165 = 0.020805644
        else:
            if input[9] < -0.0045849904:
                var165 = 0.12567884
            else:
                if input[9] < 0.6369434:
                    var165 = -0.11194358
                else:
                    var165 = -0.011652638
    if input[0] < -0.15744999:
        if input[5] < -0.12487403:
            if input[5] < -1.1627115:
                var166 = -0.0022936368
            else:
                var166 = 0.18562125
        else:
            var166 = -0.025768016
    else:
        if input[9] < -0.7461136:
            if input[1] < 0.3337534:
                var166 = 0.15499066
            else:
                var166 = -0.03141782
        else:
            if input[5] < -1.0302417:
                if input[2] < 0.9563578:
                    var166 = 0.080649726
                else:
                    var166 = -0.07314804
            else:
                if input[2] < 0.29621428:
                    var166 = -0.08383511
                else:
                    var166 = 0.0031285132
    if input[1] < 0.43661723:
        if input[7] < -0.8863267:
            if input[5] < -0.67827624:
                if input[9] < -0.6890961:
                    var167 = -0.025996285
                else:
                    var167 = 0.08291828
            else:
                if input[0] < 0.5981817:
                    var167 = 0.013276692
                else:
                    var167 = -0.13300778
        else:
            if input[9] < 1.6225669:
                if input[9] < -0.22513607:
                    var167 = 0.019136636
                else:
                    var167 = 0.12930696
            else:
                var167 = -0.03482271
    else:
        if input[0] < -0.018073348:
            var167 = 0.07671861
        else:
            if input[1] < 0.77546597:
                if input[9] < 0.7167644:
                    var167 = 0.017182477
                else:
                    var167 = -0.16632396
            else:
                if input[0] < 0.94288284:
                    var167 = 0.014339056
                else:
                    var167 = -0.08359171
    if input[4] < -0.5650263:
        if input[9] < 0.7167644:
            if input[8] < -0.0068354984:
                if input[7] < -1.2141986:
                    var168 = -0.017394748
                else:
                    var168 = 0.12965459
            else:
                if input[4] < -1.1950248:
                    var168 = -0.13590153
                else:
                    var168 = 0.051161744
        else:
            if input[12] < 1.0223489:
                if input[8] < -0.006835482:
                    var168 = -0.05954156
                else:
                    var168 = -0.18341126
            else:
                if input[8] < -0.0068354737:
                    var168 = -0.070621915
                else:
                    var168 = 0.07196959
    else:
        if input[7] < 0.9095547:
            if input[9] < 0.6369434:
                if input[4] < 0.068559624:
                    var168 = -0.0959834
                else:
                    var168 = 0.058577877
            else:
                if input[9] < 1.7087642:
                    var168 = 0.108653195
                else:
                    var168 = -0.00853967
        else:
            if input[4] < 1.2271833:
                if input[9] < 1.6950511:
                    var168 = -0.108881816
                else:
                    var168 = -0.022244338
            else:
                var168 = 0.028283188
    if input[10] < 2.5081012:
        if input[13] < 0.6978998:
            if input[8] < -0.0068354914:
                if input[7] < -1.2141986:
                    var169 = -0.14519653
                else:
                    var169 = -0.012221759
            else:
                if input[9] < 0.35161796:
                    var169 = 0.021101937
                else:
                    var169 = 0.14563274
        else:
            if input[8] < -0.0068355044:
                if input[8] < -0.006849332:
                    var169 = -0.06914705
                else:
                    var169 = 0.09813268
            else:
                if input[2] < -0.17403847:
                    var169 = -0.10454698
                else:
                    var169 = -0.03523394
    else:
        var169 = 0.09590793
    if input[5] < -1.2100307:
        if input[12] < 2.101891:
            var170 = 0.13254856
        else:
            if input[0] < 0.45550108:
                var170 = 0.057788637
            else:
                var170 = -0.07604259
    else:
        if input[7] < -0.6181675:
            if input[5] < -1.086364:
                if input[1] < 0.062419575:
                    var170 = -0.16887717
                else:
                    var170 = -0.021429127
            else:
                if input[5] < -0.67827624:
                    var170 = 0.032723077
                else:
                    var170 = -0.09285662
        else:
            if input[1] < 0.034333866:
                if input[7] < 0.16388085:
                    var170 = 0.15184727
                else:
                    var170 = -0.056126304
            else:
                if input[7] < -0.002835115:
                    var170 = -0.072360754
                else:
                    var170 = 0.010934608
    if input[1] < 1.5712967:
        if input[10] < 2.505111:
            if input[10] < 2.4684017:
                if input[10] < 2.382575:
                    var171 = -0.010094965
                else:
                    var171 = 0.08950903
            else:
                var171 = -0.09931038
        else:
            if input[0] < 0.6281093:
                var171 = 0.0072484845
            else:
                var171 = 0.09763427
    else:
        var171 = -0.09689582
    if input[9] < 1.2224033:
        if input[9] < 0.7167644:
            if input[9] < 0.35161796:
                if input[2] < 0.050103523:
                    var172 = 0.028027488
                else:
                    var172 = -0.05928716
            else:
                var172 = 0.12659271
        else:
            if input[7] < -0.8488186:
                var172 = -0.009223912
            else:
                var172 = -0.15244037
    else:
        if input[9] < 1.2942808:
            var172 = 0.12696297
        else:
            if input[7] < -0.8615595:
                if input[4] < -0.8889745:
                    var172 = 0.015463011
                else:
                    var172 = 0.10664004
            else:
                if input[7] < -0.49266136:
                    var172 = -0.17318329
                else:
                    var172 = 0.018817764
    if input[5] < 0.16398875:
        if input[4] < -1.2092285:
            if input[10] < -0.41059995:
                if input[6] < -1.0442822:
                    var173 = -0.08537279
                else:
                    var173 = -0.004493704
            else:
                if input[13] < 0.28920457:
                    var173 = 0.0039490876
                else:
                    var173 = 0.08358813
        else:
            if input[13] < 1.492855:
                if input[6] < -0.7059275:
                    var173 = 0.08283632
                else:
                    var173 = 0.025652375
            else:
                if input[6] < -0.80472517:
                    var173 = 0.029182807
                else:
                    var173 = -0.10516539
    else:
        if input[4] < 0.33419123:
            var173 = -0.13735177
        else:
            if input[13] < 0.6656839:
                var173 = 0.08484915
            else:
                if input[13] < 1.590418:
                    var173 = -0.08336467
                else:
                    var173 = 0.024340399
    if input[4] < -0.13225818:
        if input[5] < -0.39574036:
            if input[8] < -0.006835488:
                if input[10] < -0.41059917:
                    var174 = 0.07645411
                else:
                    var174 = -0.060051702
            else:
                if input[8] < -0.0068354737:
                    var174 = -0.13850667
                else:
                    var174 = 0.017609933
        else:
            var174 = -0.11118295
    else:
        if input[9] < 1.7348754:
            if input[5] < 0.61826146:
                if input[8] < -0.0068354937:
                    var174 = -0.011271417
                else:
                    var174 = 0.11863237
            else:
                if input[8] < -0.00683549:
                    var174 = 0.020395655
                else:
                    var174 = -0.067763254
        else:
            if input[5] < 0.61826146:
                var174 = -0.08135294
            else:
                var174 = 0.038108163
    if input[13] < 0.22608225:
        var175 = -0.093513526
    else:
        if input[9] < -0.7288248:
            if input[0] < 0.6874425:
                var175 = 0.17279415
            else:
                var175 = -0.050974224
        else:
            if input[3] < 2.4903069:
                if input[9] < -0.22513607:
                    var175 = -0.062970266
                else:
                    var175 = 0.019357724
            else:
                if input[0] < 0.6103641:
                    var175 = 0.025313346
                else:
                    var175 = -0.16905607
    if input[0] < 1.06175:
        if input[7] < -0.002835115:
            if input[7] < -0.32779756:
                if input[6] < -0.40789413:
                    var176 = -0.021537868
                else:
                    var176 = 0.12358658
            else:
                if input[0] < 0.45550108:
                    var176 = 0.013785609
                else:
                    var176 = -0.19374192
        else:
            if input[6] < -0.056561608:
                if input[0] < 0.703657:
                    var176 = 0.16163215
                else:
                    var176 = 0.00032271165
            else:
                if input[1] < 0.43661723:
                    var176 = 0.06246853
                else:
                    var176 = -0.07307875
    else:
        if input[8] < -0.0068354155:
            var176 = -0.14334396
        else:
            var176 = 0.00028097458
    if input[5] < -1.2100307:
        if input[12] < 2.101891:
            var177 = 0.11139753
        else:
            var177 = -0.018860277
    else:
        if input[9] < 1.5641677:
            if input[9] < 1.490532:
                if input[2] < -0.19524366:
                    var177 = 0.038305975
                else:
                    var177 = -0.04875543
            else:
                var177 = -0.14272858
        else:
            if input[8] < -0.006835469:
                if input[8] < -0.006835564:
                    var177 = 0.019082567
                else:
                    var177 = 0.15402694
            else:
                if input[13] < 1.50183:
                    var177 = -0.10658213
                else:
                    var177 = 0.032340985
    if input[1] < -0.58829534:
        if input[9] < -0.7461136:
            var178 = 0.028755603
        else:
            if input[5] < -0.8220332:
                if input[9] < 0.7167644:
                    var178 = 0.0012562678
                else:
                    var178 = -0.16936925
            else:
                if input[3] < -0.28603184:
                    var178 = 0.047154333
                else:
                    var178 = -0.11015379
    else:
        if input[5] < -1.0631019:
            if input[13] < 0.939552:
                if input[5] < -1.2453699:
                    var178 = -0.0062834057
                else:
                    var178 = 0.13517168
            else:
                var178 = -0.02330047
        else:
            if input[5] < -0.37438735:
                if input[13] < 0.74281126:
                    var178 = -0.119961865
                else:
                    var178 = 0.031117184
            else:
                if input[5] < -0.18070339:
                    var178 = 0.099038646
                else:
                    var178 = -0.015025197
    if input[8] < -0.0068354737:
        if input[1] < 0.77546597:
            if input[2] < 0.34275374:
                if input[8] < -0.0068355026:
                    var179 = -0.05853241
                else:
                    var179 = 0.038020007
            else:
                if input[7] < 0.5173952:
                    var179 = -0.15004638
                else:
                    var179 = -0.0021919326
        else:
            if input[8] < -0.006842738:
                var179 = -0.0004543242
            else:
                var179 = 0.103620574
    else:
        if input[8] < -0.0068354653:
            var179 = 0.1430796
        else:
            if input[10] < 2.4524195:
                if input[4] < 0.045573667:
                    var179 = -0.0052656694
                else:
                    var179 = 0.078893654
            else:
                if input[10] < 2.5066073:
                    var179 = -0.122513354
                else:
                    var179 = 0.034211375
    if input[8] < -0.0068354937:
        if input[8] < -0.0068355044:
            if input[0] < 0.71709514:
                if input[13] < 0.28920457:
                    var180 = -0.0063841757
                else:
                    var180 = 0.150689
            else:
                if input[5] < -0.60410726:
                    var180 = -0.0066565736
                else:
                    var180 = -0.07739999
        else:
            if input[1] < 0.2570979:
                if input[1] < -0.20618671:
                    var180 = -0.004596916
                else:
                    var180 = -0.13435961
            else:
                var180 = 0.042771336
    else:
        if input[8] < -0.0068354844:
            if input[1] < 0.43661723:
                var180 = 0.1646833
            else:
                var180 = -0.005791161
        else:
            if input[8] < -0.0068354737:
                var180 = -0.08725119
            else:
                if input[5] < 0.075080834:
                    var180 = 0.03612735
                else:
                    var180 = -0.049639616
    if input[2] < -0.17403847:
        if input[7] < -0.49266136:
            if input[1] < 0.43661723:
                if input[6] < -0.8518107:
                    var181 = 0.041641872
                else:
                    var181 = -0.090634935
            else:
                var181 = -0.18014058
        else:
            if input[1] < 0.2570979:
                if input[7] < -0.020665418:
                    var181 = 0.035088524
                else:
                    var181 = -0.104564115
            else:
                var181 = 0.13713308
    else:
        if input[7] < 1.3428441:
            if input[6] < 0.8813992:
                if input[6] < 0.4856713:
                    var181 = 0.03372692
                else:
                    var181 = -0.11230483
            else:
                var181 = 0.1077528
        else:
            var181 = -0.100719586
    if input[0] < 0.8579408:
        if input[0] < 0.6444517:
            if input[13] < 1.1222622:
                if input[13] < 0.28920457:
                    var182 = -0.02137498
                else:
                    var182 = 0.09167032
            else:
                if input[1] < 0.062419575:
                    var182 = -0.15045649
                else:
                    var182 = 0.0069142766
        else:
            if input[4] < -0.90354806:
                if input[1] < 0.2570979:
                    var182 = -0.059958473
                else:
                    var182 = 0.0430326
            else:
                if input[1] < 0.20450042:
                    var182 = 0.12606637
                else:
                    var182 = 0.004207429
    else:
        if input[0] < 0.9108674:
            var182 = -0.11816218
        else:
            if input[1] < 0.99653345:
                if input[4] < -0.15797976:
                    var182 = -0.050495688
                else:
                    var182 = 0.08346683
            else:
                var182 = -0.09036815
    if input[13] < 0.9564157:
        if input[4] < 0.068559624:
            if input[5] < -0.60410726:
                if input[5] < -0.8584019:
                    var183 = -0.0013228062
                else:
                    var183 = 0.11892974
            else:
                if input[7] < 0.04636067:
                    var183 = -0.014975603
                else:
                    var183 = -0.18646853
        else:
            if input[4] < 0.3889631:
                var183 = 0.13780543
            else:
                if input[4] < 0.8557113:
                    var183 = -0.076590054
                else:
                    var183 = 0.11472303
    else:
        if input[1] < 1.448875:
            if input[6] < 1.043301:
                if input[7] < -0.63926005:
                    var183 = -0.013233822
                else:
                    var183 = -0.112782106
            else:
                var183 = 0.047642138
        else:
            var183 = 0.06445789
    if input[0] < -0.75076395:
        var184 = 0.08535511
    else:
        if input[6] < 1.2585163:
            if input[6] < -0.96713156:
                if input[10] < 2.0547452:
                    var184 = -0.07044977
                else:
                    var184 = 0.04923215
            else:
                if input[0] < 1.06175:
                    var184 = 0.024858722
                else:
                    var184 = -0.06769083
        else:
            var184 = -0.08646708
    if input[2] < -0.95835245:
        if input[6] < -0.98786396:
            if input[0] < 0.27600068:
                var185 = 0.028941944
            else:
                var185 = -0.036372524
        else:
            if input[0] < 0.069288835:
                var185 = -0.12426385
            else:
                var185 = -0.019693663
    else:
        if input[0] < 0.25316742:
            if input[6] < -0.71865964:
                if input[7] < -1.197725:
                    var185 = 0.014394465
                else:
                    var185 = 0.16857532
            else:
                if input[4] < -0.05415567:
                    var185 = -0.10076521
                else:
                    var185 = 0.07224028
        else:
            if input[0] < 0.35027266:
                var185 = -0.10997189
            else:
                if input[0] < 0.4959279:
                    var185 = 0.07183328
                else:
                    var185 = -0.012594261
    if input[13] < 0.22608225:
        var186 = -0.08797707
    else:
        if input[10] < -0.41059917:
            if input[2] < 0.5216473:
                if input[7] < -0.91199803:
                    var186 = -0.0004556915
                else:
                    var186 = 0.09738014
            else:
                if input[6] < -0.10598599:
                    var186 = 0.024730103
                else:
                    var186 = -0.06008298
        else:
            if input[10] < 2.505111:
                if input[2] < 0.804266:
                    var186 = -0.1582341
                else:
                    var186 = 0.040359735
            else:
                if input[7] < 0.75587326:
                    var186 = 0.12015625
                else:
                    var186 = -0.026587462
    if input[10] < 2.393337:
        if input[7] < 0.62571764:
            if input[7] < 0.30703884:
                if input[9] < 1.008733:
                    var187 = -0.046483416
                else:
                    var187 = 0.03933121
            else:
                if input[6] < 0.32580036:
                    var187 = -0.1359554
                else:
                    var187 = -0.012593831
        else:
            if input[6] < 0.9968205:
                var187 = 0.10653071
            else:
                var187 = -0.019639604
    else:
        if input[7] < -0.32779756:
            if input[8] < -0.0068354676:
                var187 = 0.0044393465
            else:
                var187 = 0.15035704
        else:
            if input[2] < 0.50492215:
                var187 = -0.09096354
            else:
                if input[2] < 0.90760964:
                    var187 = 0.079562046
                else:
                    var187 = -0.038349196
    if input[9] < 0.7167644:
        if input[8] < -0.006835501:
            if input[8] < -0.0068355026:
                if input[9] < -0.6506783:
                    var188 = -0.008574033
                else:
                    var188 = 0.07400102
            else:
                var188 = 0.13607413
        else:
            if input[2] < -0.5901068:
                var188 = -0.0774244
            else:
                if input[2] < 0.14076117:
                    var188 = 0.09852722
                else:
                    var188 = -0.023809133
    else:
        if input[8] < -0.006835498:
            if input[10] < 2.4650881:
                if input[9] < 1.2482135:
                    var188 = -0.021968756
                else:
                    var188 = -0.16579188
            else:
                var188 = -0.0018755523
        else:
            if input[8] < -0.0068354844:
                if input[13] < 0.74281126:
                    var188 = 0.01995151
                else:
                    var188 = 0.1410807
            else:
                if input[2] < 0.16739047:
                    var188 = -0.09592932
                else:
                    var188 = 0.032399286
    if input[0] < -0.22230978:
        if input[7] < -1.1441269:
            var189 = -0.025111139
        else:
            var189 = 0.09813033
    else:
        if input[1] < 0.3337534:
            if input[10] < -0.41059995:
                if input[0] < 0.35027266:
                    var189 = -0.072118714
                else:
                    var189 = -0.0005175754
            else:
                var189 = 0.11869763
        else:
            if input[6] < -1.003225:
                if input[0] < 0.7400213:
                    var189 = -0.14566514
                else:
                    var189 = -0.023516009
            else:
                if input[6] < -0.46066642:
                    var189 = 0.049527172
                else:
                    var189 = -0.0547353
    if input[13] < 1.806345:
        if input[12] < 2.3839366:
            if input[10] < 2.393337:
                if input[0] < 0.9616683:
                    var190 = -0.027777208
                else:
                    var190 = 0.029591251
            else:
                if input[12] < 2.1113806:
                    var190 = 0.0024554122
                else:
                    var190 = 0.114496574
        else:
            var190 = -0.10262742
    else:
        var190 = 0.07328795
    if input[5] < -0.53698564:
        if input[0] < 0.6707853:
            if input[2] < -0.5901068:
                if input[5] < -1.0217454:
                    var191 = 0.04139206
                else:
                    var191 = -0.04527328
            else:
                if input[5] < -0.90171605:
                    var191 = 0.045050647
                else:
                    var191 = 0.19353506
        else:
            if input[5] < -1.2167692:
                var191 = 0.08762174
            else:
                if input[6] < -0.41397032:
                    var191 = -0.071493104
                else:
                    var191 = 0.04809528
    else:
        if input[2] < -0.6188564:
            var191 = 0.083614364
        else:
            if input[6] < 0.21109343:
                if input[0] < 0.9108674:
                    var191 = -0.12695037
                else:
                    var191 = 0.039145768
            else:
                if input[5] < -0.08411202:
                    var191 = 0.11839433
                else:
                    var191 = -0.009157964
    if input[1] < 1.5152782:
        if input[1] < 1.2296999:
            if input[12] < 2.319605:
                if input[8] < -0.0068354914:
                    var192 = -0.01525739
                else:
                    var192 = 0.033110894
            else:
                var192 = -0.060601335
        else:
            if input[8] < -0.006835395:
                var192 = 0.08737313
            else:
                var192 = 0.023296839
    else:
        var192 = -0.061027296
    if input[8] < -0.006650468:
        if input[10] < 2.505111:
            if input[1] < 0.034333866:
                if input[8] < -0.0068305377:
                    var193 = 0.045886833
                else:
                    var193 = -0.05570398
            else:
                if input[8] < -0.006835445:
                    var193 = -0.066398464
                else:
                    var193 = 0.01572576
        else:
            if input[5] < 0.028672833:
                var193 = 0.08043326
            else:
                var193 = 0.004061327
    else:
        if input[5] < -0.23212196:
            var193 = 0.100115694
        else:
            var193 = 0.00329458
    if input[4] < 0.14808951:
        if input[1] < -0.58829534:
            if input[9] < -0.7461136:
                var194 = 0.024174869
            else:
                if input[6] < -0.41397032:
                    var194 = -0.13009459
                else:
                    var194 = -0.021068875
        else:
            if input[2] < 0.16739047:
                if input[2] < -0.6188564:
                    var194 = 0.054122176
                else:
                    var194 = -0.068894416
            else:
                if input[9] < 1.7087642:
                    var194 = 0.05675566
                else:
                    var194 = -0.057889067
    else:
        if input[2] < 1.1765547:
            if input[2] < 0.9563578:
                if input[2] < 0.72061753:
                    var194 = 0.055189025
                else:
                    var194 = -0.08538374
            else:
                var194 = 0.14417572
        else:
            if input[6] < -0.17688203:
                var194 = -0.07002099
            else:
                var194 = 0.01546717
    if input[9] < 1.5422175:
        if input[9] < 1.4334193:
            if input[6] < 0.6625046:
                if input[0] < -0.75076395:
                    var195 = 0.067019716
                else:
                    var195 = -0.016103959
            else:
                var195 = 0.080092356
        else:
            if input[0] < 0.85236233:
                var195 = -0.12119395
            else:
                var195 = 0.007333715
    else:
        if input[9] < 1.8196921:
            if input[6] < -1.0659347:
                var195 = 0.09382416
            else:
                if input[9] < 1.7223806:
                    var195 = -0.028136205
                else:
                    var195 = 0.06671001
        else:
            var195 = -0.050762657
    if input[0] < 1.06175:
        if input[6] < 1.2585163:
            if input[4] < 0.48700154:
                if input[7] < 0.43074575:
                    var196 = 0.03210202
                else:
                    var196 = -0.0632363
            else:
                if input[7] < 0.4687581:
                    var196 = -0.00052532787
                else:
                    var196 = 0.11493404
        else:
            var196 = -0.04820222
    else:
        var196 = -0.060420375
    if input[13] < 0.22608225:
        var197 = -0.08921401
    else:
        if input[10] < -0.4106002:
            if input[13] < 1.2388383:
                if input[0] < 0.028297966:
                    var197 = 0.12848993
                else:
                    var197 = 0.028895652
            else:
                if input[7] < 0.5173952:
                    var197 = -0.11077711
                else:
                    var197 = 0.033729605
        else:
            if input[13] < 0.74281126:
                if input[10] < 2.4769316:
                    var197 = -0.14281693
                else:
                    var197 = -0.023875225
            else:
                if input[7] < -0.3977459:
                    var197 = 0.094857834
                else:
                    var197 = -0.04375183
    if input[2] < 1.5034567:
        if input[2] < 0.3487683:
            if input[4] < 0.5235074:
                if input[5] < -0.5177197:
                    var198 = 0.0052678757
                else:
                    var198 = -0.086934775
            else:
                var198 = 0.054037295
        else:
            if input[0] < 0.43006703:
                var198 = 0.11966096
            else:
                if input[2] < 0.5216473:
                    var198 = 0.09181146
                else:
                    var198 = -0.020110946
    else:
        var198 = -0.078487776
    if input[6] < -1.1233191:
        if input[0] < 0.76141316:
            if input[2] < -0.95835245:
                var199 = -0.08061585
            else:
                if input[2] < 1.0270487:
                    var199 = 0.079239406
                else:
                    var199 = -0.013820217
        else:
            var199 = -0.11583062
    else:
        if input[0] < -0.0024870804:
            if input[6] < -0.43743572:
                var199 = 0.02255887
            else:
                var199 = -0.10428198
        else:
            if input[10] < -0.4105998:
                if input[2] < 0.5216473:
                    var199 = 0.0777459
                else:
                    var199 = -0.02161293
            else:
                if input[2] < 0.604416:
                    var199 = -0.071738005
                else:
                    var199 = 0.04517523
    if input[8] < -0.006835473:
        if input[8] < -0.0068355044:
            if input[8] < -0.0068407496:
                var200 = -0.025147596
            else:
                if input[6] < -1.003225:
                    var200 = -0.033415608
                else:
                    var200 = 0.14445715
        else:
            if input[6] < -1.0317743:
                var200 = 0.06710051
            else:
                if input[6] < 0.85395443:
                    var200 = -0.08982276
                else:
                    var200 = 0.036029432
    else:
        if input[0] < 0.8195323:
            if input[7] < -0.56804717:
                if input[6] < -1.1370107:
                    var200 = 0.0044695004
                else:
                    var200 = 0.088010654
            else:
                if input[7] < 0.010752965:
                    var200 = -0.08405602
                else:
                    var200 = -0.010189536
        else:
            if input[13] < 1.5626355:
                if input[0] < 0.9521798:
                    var200 = 0.015891707
                else:
                    var200 = 0.11705865
            else:
                var200 = -0.0063288566
    if input[9] < -0.15212247:
        if input[5] < -0.5564768:
            if input[2] < 0.16739047:
                if input[8] < -0.0068355007:
                    var201 = 0.0083550075
                else:
                    var201 = -0.076456085
            else:
                var201 = 0.050969973
        else:
            if input[8] < -0.006835479:
                if input[8] < -0.0068355007:
                    var201 = -0.0251289
                else:
                    var201 = 0.009844152
            else:
                var201 = -0.14296032
    else:
        if input[10] < -0.41060022:
            if input[9] < 1.490532:
                if input[5] < -0.5334082:
                    var201 = 0.012560491
                else:
                    var201 = 0.12542649
            else:
                if input[8] < -0.0068354937:
                    var201 = -0.091718294
                else:
                    var201 = 0.007309038
        else:
            if input[9] < 1.7284002:
                if input[2] < 0.50492215:
                    var201 = -0.1213231
                else:
                    var201 = -0.004873439
            else:
                if input[5] < -0.53698564:
                    var201 = 0.098138675
                else:
                    var201 = -0.05589493
    if input[5] < 0.38356993:
        if input[4] < -0.40158397:
            if input[5] < -1.2537628:
                var202 = 0.0618814
            else:
                if input[4] < -1.2947433:
                    var202 = -0.11099335
                else:
                    var202 = -0.0043974067
        else:
            if input[8] < -0.006835458:
                if input[5] < -0.4330885:
                    var202 = -0.007107927
                else:
                    var202 = 0.12519561
            else:
                if input[8] < -0.0068135695:
                    var202 = -0.07552938
                else:
                    var202 = 0.06606968
    else:
        if input[4] < 1.2271833:
            var202 = -0.08768698
        else:
            var202 = 0.021370899
    var203 = sigmoid(var147 + var148 + var149 + var150 + var151 + var152 + var153 + var154 + var155 + var156 + var157 + var158 + var159 + var160 + var161 + var162 + var163 + var164 + var165 + var166 + var167 + var168 + var169 + var170 + var171 + var172 + var173 + var174 + var175 + var176 + var177 + var178 + var179 + var180 + var181 + var182 + var183 + var184 + var185 + var186 + var187 + var188 + var189 + var190 + var191 + var192 + var193 + var194 + var195 + var196 + var197 + var198 + var199 + var200 + var201 + var202)
    return [1.0 - var203, var203]

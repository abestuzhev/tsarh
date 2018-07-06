<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<?if(!empty($arResult["ITEMS"])):?>
<?
$i = 1;
?>



<ul id="technics" class="uk-subnav uk-flex uk-flex-center uk-flex-bottom uk-grid uk-grid-width-1-2 uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-6">
    <?foreach ($arResult["ITEMS"] as $arItem):?>
        <?if($arItem["UF_PICTURE"] && $arItem["UF_PICTURE_HOVER"]):?>
            <style>
                ul#technics li.li-<?=$arItem["ID"]?> a:before, ul#technics li.uk-active.disable.li-<?=$arItem["ID"]?> a:before {
                background-image: url("<?=CFile::GetPath($arItem["UF_PICTURE"])?>");
                }
                ul#technics li.hover.li-<?=$arItem["ID"]?> a:before, ul#technics li.uk-active.li-<?=$arItem["ID"]?> a:before, ul#technics li.uk-active.disable.hover.li-<?=$arItem["ID"]?> a:before {
                background-image: url("<?=CFile::GetPath($arItem["UF_PICTURE_HOVER"])?>");
            }
            </style>
            <?
            $i++;
        endif;?>
        <li data-uk-filter="filter-<?=$arItem["ID"]?>" class="li-<?=$arItem["ID"]?>"><a href=""><span class="outer"><span class="inner"><?=$arItem["NAME"]?></span></span></a></li>
    <?endforeach;?>
</ul>

<div class="technics" data-uk-grid="{controls: '#technics', animation:false, filter:'filter-1',duration:0}">
    <?foreach ($arResult["ITEMS"] as $arItem):?>
    <div data-uk-filter="filter-<?=$arItem["ID"]?>">
        <div class="uk-accordion" data-uk-accordion="showfirst:false">
            <?
            foreach ($arItem["ITEMS"] as $post) {

                ?>
                <div class="uk-accordion-title">
                    <span>
                        <?if($post["PROPERTIES"]["INFORMATION"]["VALUE"]){
                            echo $post["PROPERTIES"]["INFORMATION"]["VALUE"];
                        }
//                        else {
//                            $from = $post["PROPERTIES"]["PRICE_FROM"]["VALUE"];
//                            $before = $post["PROPERTIES"]["PRICE_BEFORE"]["VALUE"];
//                            switch (true) {
//                                case ($from && $before):
//                                    echo 'от ' . $from . ' до ' . $before . 'р/ч';
//                                    break;
//                                case ($from):
//                                    echo 'от ' . $from . 'р/ч';
//                                    break;
//                                default:
//                                    echo "цена договорная";
//                            }
//                        }
                        ?>
                    </span>
                    <h3><?=$post["NAME"]?></h3>
                    <p><?if($post["PROPERTIES"]["ADD_TEXT"]["VALUE"]){
                            echo $post["PROPERTIES"]["ADD_TEXT"]["VALUE"];
                        }
                        ?></p>
                    <p><?=$post["PREVIEW_TEXT"]?></p>
                </div>
                <div class="uk-accordion-content">
                    <?if($post["PREVIEW_PICTURE"]["SRC"])?>
                    <img src="<?=$post["PREVIEW_PICTURE"]["SRC"]?>" alt="">
                </div>
            <? } ?>
        </div>
    </div>
    <?endforeach;?>
</div>

<?endif;?>

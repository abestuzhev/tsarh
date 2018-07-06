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
<?
//print_var($arResult["ITEMS"]);
?>

<?if(!empty($arResult["ITEMS"])):?>
    <div class="uk-dinamic-grid">
        <div class="uk-grid-din">
            <?
            $j = 0;
            $output = '';
            foreach ($arResult["ITEMS"] as $arItem) {?>
                <div class="uk-grid-din-item">
                    <div class="uk-panel-header"><?=$arItem["NAME"]?></div>
                    <img width="338" height="250" src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" class=" wp-post-image" alt="" sizes="(max-width: 338px) 100vw, 338px">
                    <div id="<? echo $j++; ?>" class="job uk-width-1-1 hidden" data-uk-observe data-uk-check-display>
                        <div class="uk-panel" data-uk-grid-match data-uk-check-display>
                            <div class="uk-panel-description">
                                <div class="uk-panel-header">
                                    <?=$arItem["PROPERTIES"]["HEADER_TEXT"]["VALUE"]?>
                                </div>
                                <div class="uk-panel-body">
                                    <?=$arItem["PREVIEW_TEXT"]?>
                                </div>
                            </div>
                            <div class="uk-panel-gallery">

                                <div id="slide<? echo $j; ?>" class="uk-slidenav-position" data-uk-slideshow="{autoplay:true}" data-uk-check-display>
                                    <ul class="uk-slideshow">
                                        <?foreach ($arItem["PROPERTIES"]["MORE_PHOTO"]["VALUE"] as $pic):?>
                                            <li><img src="<?=CFile::GetPath($pic)?>" class="my-custom-class" alt="Gallery image"/></li>
                                        <?endforeach;?>
                                    </ul>
                                    <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous"
                                       data-uk-slideshow-item="previous"></a>
                                    <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next"
                                       data-uk-slideshow-item="next"></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <?
            } ?>
        </div>
    </div>
<?endif;?>

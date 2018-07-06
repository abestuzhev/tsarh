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
$this->addExternalJs("pdf.js");
?>
<?
//print_var($arResult["ITEMS"]);
?>
<script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>

<?if(!empty($arResult["ITEMS"])):?>
    <?foreach ($arResult["ITEMS"] as $arItem):?>
        <?if($arItem["PREVIEW_PICTURE"]["SRC"]):?>
            <a href="#" class="click_doc" data-src="<?=CFile::GetPath($arItem["PROPERTIES"]["FILE"]["VALUE"])?>"style="display: block;">
                <div class="uk-grid-din-item">
                    <img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>">
                </div>
            </a>

        <?else:?>
            <div class="uk-grid-din-item" style="height: 300px">
                <a href="#" class="click_doc" data-src="<?=CFile::GetPath($arItem["PROPERTIES"]["FILE"]["VALUE"])?>"  style="display: block;">
                    <div class="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                        <div class="uk-text-center dop"><img src="<?=SITE_TEMPLATE_PATH?>/img/Dopolnenie.svg" /><div><?=$arItem["NAME"]?></div></div>
                    </div>
                </a>
            </div>
        <?
            $p = $arItem["PROPERTIES"]["FILE"]["VALUE"];
        endif;?>

    <?endforeach;?>
<?endif;?>


<div id="openModal" class="modalDialog">
    <a href="#" title="Закрыть" id="closeModal" class="close">X</a>
    <div>
        <div id="pdf-view"></div>
    </div>


</div>





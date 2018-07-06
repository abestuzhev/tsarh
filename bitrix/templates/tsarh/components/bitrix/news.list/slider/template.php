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
<div class="slider">
    <div class="uk-slidenav-position" data-uk-slideshow="{autoplay:true, animation:'fade'}">
        <ul class="uk-slideshow uk-overlay-active">
            <?foreach ($arResult["ITEMS"] as $arItem):?>
                <li>
                    <img src=" <?=$arItem["PREVIEW_PICTURE"]["SRC"]?> " alt=""/>
                    <div
                            class="uk-container uk-container-center uk-overlay-panel uk-overlay-fade uk-flex uk-flex-middle uk-flex-center uk-text-center uk-scrollspy-init-inview uk-scrollspy-inview uk-animation-fade"
                            data-uk-scrollspy="{cls:'uk-animation-fade'}">
                        <div>
                            <?=$arItem["PREVIEW_TEXT"]?>
                        </div>
                    </div>
                </li>
            <?endforeach;?>
        </ul>
        <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
        <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
    </div>
</div>
<?endif;?>
<script>
    UIkit.slider
</script>

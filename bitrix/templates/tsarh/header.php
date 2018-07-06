<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>
<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#">
<head>

    <meta charset="utf-8">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet"
          href="http://fonts.googleapis.com/css?family=Roboto+Condensed:300,700,400&subset=cyrillic,latin"
          type="text/css"/>


    <title><?$APPLICATION->ShowTitle();?> - Трансстрой</title>
    <?$APPLICATION->ShowHead();?>
    <?
    use Bitrix\Main\Page\Asset;
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/uikit.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/components/slideshow.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/components/slidenav.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/components/dotnav.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/components/slider.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/components/search.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/style.css");

    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/jquery-1.11.3.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/uikit.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/components/slider.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/components/slideset.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/components/slideshow-fx.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/components/slideshow.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/components/lightbox.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/components/grid.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/components/accordion.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/init.js");
//    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/pdf.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/pdf.worker.js");
    ?>


</head>
<?
    $class="";
    if($APPLICATION->GetCurPage()=="/"){
        $class = "home page-template-default page page-id-6";
    }
    elseif (strpos($APPLICATION->GetCurPage(),"jobs")!==false){
        $class = "archive category category-jobs category-9";
    }
    elseif (strpos($APPLICATION->GetCurPage(),"services")!==false){
        $class = "page-template-default page page-id-50";
    }
    elseif (strpos($APPLICATION->GetCurPage(),"contacts")!==false){
        $class = "page-template-default page page-id-13";
    }
    elseif (strpos($APPLICATION->GetCurPage(),"svidetelstva")!==false){
        $class = "page-template-default page page-id-11";
    }
    elseif (strpos($APPLICATION->GetCurPage(),"technics")!==false){
        $class = "archive category category-technics category-2";
    }
?>
<body class="<?=$class?>">
<div id="panel">
    <?$APPLICATION->ShowPanel();?>
</div>
<header>
    <div class="uk-container uk-container-center">
        <nav class="uk-navbar uk-flex">
            <a class="uk-navbar-brand" href="/">
                <?$APPLICATION->IncludeFile("/include/logo.php",[],["MODE"=>"html"])?>
            </a>
            <div class="uk-navbar-content uk-navbar-center uk-visible-large">
                <?// Меню - http://dev.1c-bitrix.ru/user_help/settings/settings/components_2/navigation/menu.php
                $APPLICATION->IncludeComponent(
                    "bitrix:menu",
                    "main",                  // [bottom_menu, catalog_native, top_menu, .default, blue_tabs, catalog_horizontal, catalog_vertical, grey_tabs, horizontal_multilevel, tree, vertical_multilevel]
                    array(
                        // region Основные параметры
                        "ROOT_MENU_TYPE"         =>  "top",  // Тип меню для первого уровня : array ( 'left' => 'Левое меню', 'top' => 'Верхнее меню', 'bottom' => 'Нижнее меню', )
                        // endregion
                        // region Настройки кеширования
                        "MENU_CACHE_TYPE"        =>  "N",     // Тип кеширования : array ( 'A' => 'Авто', 'Y' => 'Кешировать', 'N' => 'Не кешировать', )
                        "MENU_CACHE_TIME"        =>  "3600",  // Время кеширования (сек.)
                        "MENU_CACHE_USE_GROUPS"  =>  "Y",     // Учитывать права доступа
                        "MENU_CACHE_GET_VARS"    =>  "",      // Значимые переменные запроса
                        // endregion
                        // region Дополнительные настройки
                        "MAX_LEVEL"              =>  "1",     // Уровень вложенности меню : array ( 1 => '1', 2 => '2', 3 => '3', 4 => '4', )
                        "CHILD_MENU_TYPE"        =>  "left",  // Тип меню для остальных уровней : array ( 'left' => 'Левое меню', 'top' => 'Верхнее меню', 'bottom' => 'Нижнее меню', )
                        "USE_EXT"                =>  "N",     // Подключать файлы с именами вида .тип_меню.menu_ext.php
                        "DELAY"                  =>  "N",     // Откладывать выполнение шаблона меню
                        "ALLOW_MULTI_SELECT"     =>  "N",     // Разрешить несколько активных пунктов одновременно
                        // endregion
                    )
                );?>
            </div>
            <div class="uk-button-offcanvas uk-float-right uk-hidden-large uk-flex uk-flex-center uk-flex-middle hamburger-tab uk-navbar-flip">
                <a href="#menu" data-uk-offcanvas="" class="uk-icon-navicon uk-icon-small"></a>
            </div>
            <div class="uk-navbar-flip">
                <a class="phone" href="tel:+7 (8182) 42-19-20">+7 (8182) 42-19-20</a>
            </div>

        </nav>
    </div>
</header>


<div id="menu" class="uk-offcanvas">
    <div class="uk-offcanvas-bar uk-offcanvas-bar-flip">
        <?// Меню - http://dev.1c-bitrix.ru/user_help/settings/settings/components_2/navigation/menu.php
        $APPLICATION->IncludeComponent(
            "bitrix:menu",
            "main-mob",                  // [bottom_menu, catalog_native, top_menu, .default, blue_tabs, catalog_horizontal, catalog_vertical, grey_tabs, horizontal_multilevel, tree, vertical_multilevel]
            array(
                // region Основные параметры
                "ROOT_MENU_TYPE"         =>  "top",  // Тип меню для первого уровня : array ( 'left' => 'Левое меню', 'top' => 'Верхнее меню', 'bottom' => 'Нижнее меню', )
                // endregion
                // region Настройки кеширования
                "MENU_CACHE_TYPE"        =>  "N",     // Тип кеширования : array ( 'A' => 'Авто', 'Y' => 'Кешировать', 'N' => 'Не кешировать', )
                "MENU_CACHE_TIME"        =>  "3600",  // Время кеширования (сек.)
                "MENU_CACHE_USE_GROUPS"  =>  "Y",     // Учитывать права доступа
                "MENU_CACHE_GET_VARS"    =>  "",      // Значимые переменные запроса
                // endregion
                // region Дополнительные настройки
                "MAX_LEVEL"              =>  "1",     // Уровень вложенности меню : array ( 1 => '1', 2 => '2', 3 => '3', 4 => '4', )
                "CHILD_MENU_TYPE"        =>  "left",  // Тип меню для остальных уровней : array ( 'left' => 'Левое меню', 'top' => 'Верхнее меню', 'bottom' => 'Нижнее меню', )
                "USE_EXT"                =>  "N",     // Подключать файлы с именами вида .тип_меню.menu_ext.php
                "DELAY"                  =>  "N",     // Откладывать выполнение шаблона меню
                "ALLOW_MULTI_SELECT"     =>  "N",     // Разрешить несколько активных пунктов одновременно
                // endregion
            )
        );?>
    </div>
</div>

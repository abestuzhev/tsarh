<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>
<footer>
    <div class="uk-container uk-container-center">
        <nav class="uk-navbar">
            <a class="uk-navbar-brand uk-flex" href="/">
                <?$APPLICATION->IncludeFile("/include/logo.php",[],["MODE"=>"html"])?>
            </a>
            <div class="">
                <?
                // Меню - http://dev.1c-bitrix.ru/user_help/settings/settings/components_2/navigation/menu.php
                $APPLICATION->IncludeComponent(
                	"bitrix:menu",
                	"footer",                  // [bottom_menu, catalog_native, top_menu, .default, blue_tabs, catalog_horizontal, catalog_vertical, grey_tabs, horizontal_multilevel, tree, vertical_multilevel]
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
                );
                ?>
            </div>
            <div class="uk-navbar-flip uk-navbar-social">
                Мы в соц сетях:
                <a href="https://www.instagram.com/ts_arh/" target="_blank"><i class="uk-icon-instagram uk-icon-small"></i></a>
            </div>
            <div class="liveinternet"
            <!--LiveInternet counter--><script type="text/javascript"><!--
                document.write("<a href='//www.liveinternet.ru/click' "+
                    "target=_blank><img src='//counter.yadro.ru/hit?t17.6;r"+
                    escape(document.referrer)+((typeof(screen)=="undefined")?"":
                        ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
                        screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
                    ";"+Math.random()+
                    "' alt='' title='LiveInternet: показано число просмотров за 24"+
                    " часа, посетителей за 24 часа и за сегодня' "+
                    "border='0' width='88' height='31'><\/a>")
                //--></script><!--/LiveInternet-->
    </div>
    </nav>
    </div>
</footer>
</body>
</html>
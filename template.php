<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<?

//azbn_ed($arResult);

/*
foreach($arResult['APARTMENT_ITEMS'] as $a) {
	echo '<p>' . $a['NAME'] . ' (' . $a['PROPERTY_BUILDING_VALUE'] . ')</p>';
}
*/

?>

<div class="content-block houses-item-page" role="main">
	<div class="container content-block__container">
		<div class="breadcrumb__block">
			<ul class="breadcrumb__list">
				<li class="breadcrumb__list-item"><a href="/" class="breadcrumb__list-link">Главная</a></li>		
				<li class="breadcrumb__list-item">
					<a href="/property/resale/" class="breadcrumb__list-link">Вторичная недвижимость</a>
				</li>	
				<li class="breadcrumb__list-item  is--active"><?=$arResult['ITEM']['NAME'];?></li>
			</ul>
		</div>
		<div class="page-header__block">
			<h1 class="page-header__heading  is--icon">
				<?=$arResult['ITEM']['NAME'];?>
				<span class="page-header__heading-icon">
					<svg class="icon-svg icon-header-houses" role="img">
						<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#header-houses"></use>
					</svg>
				</span>
			</h1>		
		</div>	
		<div class="_hsip__info">
			<div class="row  is--wrap is--gutter">
				<div class="cols  is--cols-8 _hsip__cols">
					
					<?
					if(count($arResult['GALLERY_ITEMS'])) {
					?>
					
					<div class="houses-slider__block azbn__property-gallery ">				
						
						<?
						foreach($arResult['GALLERY_ITEMS'] as $item_index => $item) {
							
							$img_full = CFile::GetPath($item['DETAIL_PICTURE']);
							
							//$size_arr = array('width' => 245, 'height' => 168);
							
							//$img_full_sm = CFile::ResizeImageGet($item['DETAIL_PICTURE'], $size_arr, BX_RESIZE_IMAGE_EXACT, true);
							
							
						?>
						<a href="<?=$img_full;?>" class="houses-slider__item azbn__property-gallery__item_full fancybox-preview <?if($item_index == 0){?>is--active<?}?> " style="background-image:url(<?=$img_full;?>);" data-photo-id="<?=$item['ID']?>" data-fancybox="gallery-<?=$arResult['ITEM']['ID'];?>" ></a>
						<?
						}
						?>
						
						<div class="houses-slider__thumbnail" >			
							<div class="houses-slider__thumbnail-inner azbn__property-gallery__move-me" >			
								
								<?
								foreach($arResult['GALLERY_ITEMS'] as $item_index => $item) {
									
									//$img_full = CFile::GetPath($item['DETAIL_PICTURE']);
									
									$size_arr = array('width' => 245, 'height' => 168);
									
									$img_full_sm = CFile::ResizeImageGet($item['DETAIL_PICTURE'], $size_arr, BX_RESIZE_IMAGE_EXACT, true);
									
								?>
								<div class="houses-slider__thumbnail-item azbn__property-gallery__item_sm <?if($item_index == 0){?>is--active<?}?> " style="background-image:url(<?=$img_full_sm['src'];?>);" data-photo-id="<?=$item['ID']?>" ></div>
								<?
								}
								?>
								
							</div>
						</div>
						<button tupe="button" class="houses-slider__btn  is--prev azbn__property-gallery__prev ">
							<svg class="icon-svg icon-arrow-left-900" role="img">
								<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#arrow-left-900"></use>
							</svg>
						</button>
						<button tupe="button" class="houses-slider__btn  is--next azbn__property-gallery__next ">
							<svg class="icon-svg icon-arrow-right-900" role="img">
								<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#arrow-right-900"></use>
							</svg>
						</button>
					</div>
					
					<?
					}
					?>
					
				</div>
				<div class="cols  is--cols-4 _hsip__cols">			
					<div class="houses-panel__block">				
						
						<div class="houses-panel__note">
							
							<h3 class="houses-panel__heading"><?=$arResult['ITEM']['PROPERTY_ADR_VALUE'];?></h3>
							<div class="houses-panel__text"><?=$arResult['ITEM']['PROPERTY_DISTRICT_VALUE'];?></div>
							
							<?
							if($arResult['ITEM']['PROPERTY_AREA_VALUE'] != '') {
							?>
							<div class="houses-panel__text"><span class="color--blue">Общая площадь:</span> <?=$arResult['ITEM']['PROPERTY_AREA_VALUE'];?> м<sup>2</sup></div>
							<?
							}
							?>
							
							<?
							if($arResult['ITEM']['PROPERTY_ROOMS_AMOUNT_VALUE'] != '') {
							?>
							<div class="houses-panel__text"><span class="color--blue">Комнат:</span> <?=$arResult['ITEM']['PROPERTY_ROOMS_AMOUNT_VALUE'];?></div>
							<?
							}
							?>
							
							<?
							if($arResult['ITEM']['PROPERTY_MATERIAL_VALUE'] != '') {
							?>
							<div class="houses-panel__text"><span class="color--blue">Тип дома:</span> <?=$arResult['ITEM']['PROPERTY_MATERIAL_VALUE'];?></div>
							<?
							}
							?>
							
							<?
							if($arResult['ITEM']['PROPERTY_FLOOR_VALUE'] != '') {
							?>
							<div class="houses-panel__text"><span class="color--blue">Этажность:</span> <?=$arResult['ITEM']['PROPERTY_FLOOR_VALUE'];?></div>
							<?
							}
							?>
							
							
							<?
							if($arResult['ITEM']['PROPERTY_COST_VALUE'] != '') {
							?>
							<div class="houses-panel__text  is--cost">
								<span class="color--blue">Цена :</span>
								<span class="houses-panel__cost-block"><span class="houses-panel__cost"><?=azbn_apartment_cost($arResult['ITEM']['PROPERTY_COST_VALUE'], 1000, 0);?></span> тыс <span class="houses-panel__ruble"><svg class="icon-svg icon-ruble" role="img">
								<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#ruble"></use>
								</svg></span></span>
							</div>
							<?
							}
							?>
							
							<p>&nbsp;</p>
							
							<?
							if($arResult['ITEM']['~DETAIL_TEXT'] != '') {
							?>
							<div class=""><?=$arResult['ITEM']['~DETAIL_TEXT'];?></div>
							<?
							}
							?>
							
						</div>
						
						<!--
						<div class="houses-panel__btn">
							<a href="/design/" class="btn__item   is--block  is--red">
								<span class="btn__name">Посмотреть виды отделки</span>
								<span class="btn__icon">
									<svg class="icon-svg icon-btn-arrow-left" role="img"><use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#btn-arrow-left"></use></svg>
								</span>
								<span class="btn__line"></span>
							</a>	
						</div>
						-->
						
					</div>
				</div>
			</div>
		</div>

	</div>
</div>

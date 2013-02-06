<!-- START All-in-One Event Calendar Plugin - Version <?php echo AI1EC_VERSION; ?> -->
<div id="ai1ec-container" class="ai1ec-container">
	<!-- AI1EC_PAGE_CONTENT_PLACEHOLDER -->
	<div class="timely">
		<div class="ai1ec-calendar-toolbar clearfix">
			<ul class="nav nav-pills pull-left"><?php echo $views_dropdown; ?></ul>
			<?php if ( $categories || $tags ) : ?>
				<ul class="nav nav-pills pull-left">
					<?php echo $categories;?>
					<?php echo $tags;?>
				</ul>
			<?php endif; // $categories || $tags ?>
			<?php if( $create_event_url ): ?>
				<div class="nav nav-pills pull-right">
					<div class="btn-group">
						<a class="btn btn-primary" href="<?php echo $create_event_url ?>">
							<i class="icon-plus"></i> <?php _e( 'Post Your Event', AI1EC_PLUGIN_NAME ); ?>
						</a>
					</div>
				</div>
			<?php endif // $create_event_url ?>
		</div>
		<!-- /.ai1ec-calendar-toolbar -->

		<div id="ai1ec-calendar-view-container">
			<div id="ai1ec-calendar-view-loading" class="ai1ec-loading"></div>
			<div id="ai1ec-calendar-view">
				<?php echo $view; ?>
			</div>
		</div>

		<?php echo $subscribe_buttons; ?>
	</div>
	<!-- /.timely -->
</div>
<!-- END All-in-One Event Calendar Plugin -->

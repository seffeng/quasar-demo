<template>
  <div class="q-pa-md">
    <div class="text-purple q-gutter-md">
      <q-card flat bordered>
        <q-card-section>
          <q-icon size="sm" color="blue" name="search" />
          <q-icon size="md" color="red" name="search" />
          <pre style="white-space: pre-line">
            &lt;q-icon size="sm" color="blue" name="search" /&gt;
            &lt;q-icon size="md" color="red" name="search" /&gt;
            </pre>
        </q-card-section>
      </q-card>
      <div>
        <h5>Action</h5>
        <q-chip
          v-for="icon in actionIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Navigation</h5>
        <q-chip
          v-for="icon in navigationIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Social</h5>
        <q-chip
          v-for="icon in socialIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Content</h5>
        <q-chip
          v-for="icon in contentIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Image</h5>
        <q-chip
          v-for="icon in imageIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Communication</h5>
        <q-chip
          v-for="icon in communicationIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Maps</h5>
        <q-chip
          v-for="icon in mapIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>File</h5>
        <q-chip
          v-for="icon in fileIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Audio & Video</h5>
        <q-chip
          v-for="icon in mediaIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Toggle</h5>
        <q-chip
          v-for="icon in toggleIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Alert</h5>
        <q-chip
          v-for="icon in alertIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Notification</h5>
        <q-chip
          v-for="icon in notificationIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Editor</h5>
        <q-chip
          v-for="icon in editorIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Hardware</h5>
        <q-chip
          v-for="icon in hardwareIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Device</h5>
        <q-chip
          v-for="icon in deviceIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Places</h5>
        <q-chip
          v-for="icon in placeIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Search</h5>
        <q-chip
          v-for="icon in searchIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
      <div>
        <h5>Home</h5>
        <q-chip
          v-for="icon in homeIcons"
          :key="icon"
          clickable
          @click="copy(icon)"
        >
          <q-avatar>
            <q-icon :name="icon" />
          </q-avatar>
          {{ icon }}
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script>
import { copyToClipboard, useQuasar } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconPage',
  components: {
  },
  setup () {
    const $q = useQuasar()
    return {
      size: ['xs', 'sm', 'md', 'lg', 'xl'],
      actionIcons: [
        'search', 'home', 'account_circle', 'settings', 'done', 'info', 'check_circle', 'delete', 'visibility', 'shopping_cart', 'favorite', 'description', 'logout', 'favorite_border', 'lock', 'schedule', 'language', 'help_outline', 'face', 'manage_accounts', 'verified', 'thumb_up', 'filter_alt', 'event', 'fingerprint', 'dashboard', 'list', 'login', 'check_circle_outline', 'visibility_off', 'calendar_today', 'highlight_off', 'help', 'paid', 'task_alt', 'question_answer', 'date_range', 'article', 'open_in_new', 'shopping_bag', 'lightbulb', 'credit_card', 'perm_identity', 'history', 'trending_up', 'account_balance', 'delete_outline', 'verified_user', 'fact_check', 'report_problem', 'assignment', 'star_rate', 'arrow_right_alt', 'account_balance_wallet', 'autorenew', 'build', 'view_list', 'calendar_month', 'store', 'work', 'print', 'analytics', 'delete_forever', 'today', 'admin_panel_settings', 'lock_open', 'watch_later', 'grade', 'update', 'savings', 'room', 'code', 'add_shopping_cart', 'contact_support', 'receipt', 'power_settings_new', 'done_all', 'pets', 'explore', 'bookmark', 'account_box', 'note_add', 'reorder', 'pending_actions', 'bookmark_border', 'shopping_basket', 'payment', 'launch', 'drag_indicator', 'supervisor_account', 'touch_app', 'pending', 'zoom_in', 'assessment', 'leaderboard', 'thumb_up_off_alt', 'open_in_full', 'preview', 'done_outline', 'assignment_ind', 'exit_to_app', 'published_with_changes', 'card_giftcard', 'view_in_ar', 'feedback', 'label', 'work_outline', 'timeline', 'swap_horiz', 'tips_and_updates', 'stars', 'assignment_turned_in', 'dns', 'sync_alt', 'flight_takeoff', 'space_dashboard', 'contact_page', 'book', 'bug_report', 'alarm', 'cached', 'translate', 'gavel', 'pan_tool', 'edit_calendar', 'supervised_user_circle', 'minimize', 'rocket_launch', 'question_mark', 'extension', 'android', 'accessibility', 'get_app', 'record_voice_over', 'add_task', 'hourglass_empty', 'help_center', 'trending_flat', 'rule', 'accessibility_new', 'thumb_down', 'sticky_note_2', 'ads_click', 'settings_applications', 'source', 'find_in_page', 'dashboard_customize', 'support', 'swap_vert', 'flutter_dash', 'redeem', 'close_fullscreen', 'loyalty', 'announcement', 'arrow_circle_right', 'view_headline', 'restore', 'dangerous', 'euro_symbol', 'sensors', 'group_work', 'compare_arrows', 'table_view', 'currency_exchange', 'subject', 'disabled_by_default', 'privacy_tip', 'nightlight_round', 'https', 'toc', 'bookmarks', 'arrow_circle_up', 'track_changes', 'input', 'copyright', 'view_module', 'api', 'grading', 'perm_media', 'query_builder', 'build_circle', 'perm_contact_calendar', 'zoom_out', 'settings_phone', 'backup', 'open_with', 'circle_notifications', 'perm_phone_msg', 'speaker_notes', 'wysiwyg', 'label_important', 'card_membership', 'book_online', 'file_present', 'arrow_circle_down', 'pageview', '3d_rotation', 'upgrade', 'change_history', 'integration_instructions', 'trending_down', 'percent', 'swipe', 'class', 'accessible', 'g_translate', 'settings_accessibility', 'expand', 'offline_bolt', 'settings_backup_restore', 'production_quantity_limits', 'arrow_circle_left', 'aspect_ratio', 'model_training', 'view_column', 'donut_large', 'segment', 'calendar_view_month', 'schedule_send', 'alarm_on', 'maximize', 'bookmark_add', 'settings_ethernet', 'thumbs_up_down', 'theaters', 'view_agenda', 'thumb_down_off_alt', 'important_devices', 'unpublished', 'system_update_alt', 'opacity', 'invert_colors', 'commute', 'no_accounts', 'open_in_browser', 'addchart', 'history_toggle_off', 'view_week', 'shopping_cart_checkout', 'youtube_searched_for', 'tour', 'hide_source', 'search_off', 'shop', 'bookmark_added', 'mark_as_unread', 'not_started', 'plagiarism', 'settings_input_antenna', 'turned_in', 'flight_land', 'assignment_return', 'filter_alt_off', 'balance', 'assignment_late', 'hotel_class', 'donut_small', 'contactless', 'saved_search', 'highlight_alt', 'settings_input_component', 'view_carousel', 'view_quilt', 'all_inbox', 'anchor', 'settings_remote', 'rocket', 'edit_off', 'turned_in_not', 'hourglass_full', 'mediation', 'fit_screen', 'remove_shopping_cart', 'flaky', 'toll', 'lock_clock', 'swap_horizontal_circle', 'terminal', 'view_sidebar', 'settings_voice', 'event_seat', 'online_prediction', 'vertical_split', 'lock_reset', 'data_exploration', 'next_plan', 'pregnant_woman', 'restore_from_trash', 'camera_enhance', 'markunread_mailbox', 'dynamic_form', 'tab', 'view_stream', 'calendar_view_week', 'request_page', 'token', 'accessible_forward', 'remove_done', 'smart_button', 'settings_power', 'add_to_drive', 'outbox', 'try', 'card_travel', 'density_medium', 'offline_pin', 'add_card', 'find_replace', 'fax', 'compress', 'calendar_view_day', 'assignment_returned', 'rowing', 'chrome_reader_mode', 'outlet', 'http', 'settings_brightness', 'generating_tokens', 'work_history', 'new_label', 'backup_table', 'alarm_add', 'spellcheck', 'free_cancellation', 'restore_page', 'credit_card_off', '123', 'wifi_protected_setup', 'play_for_work', 'settings_overscan', 'disabled_visible', 'assured_workload', 'event_repeat', 'display_settings', 'gif', 'outbound', 'pan_tool_alt', 'noise_control_off', 'swap_vertical_circle', 'view_timeline', 'cancel_schedule_send', 'settings_input_composite', 'quickreply', 'switch_access_shortcut', 'view_day', 'comment_bank', 'manage_history', 'satellite_alt', 'webhook', 'line_weight', 'horizontal_split', 'polymer', 'batch_prediction', 'send_and_archive', 'picture_in_picture', 'code_off', 'bookmark_remove', 'settings_bluetooth', 'output', 'html', 'troubleshoot', 'shop_two', 'flip_to_front', 'gif_box', 'eject', 'speaker_notes_off', 'perm_data_setting', 'alarm_off', 'settings_input_hdmi', 'hourglass_disabled', 'switch_access_shortcut_add', 'perm_scan_wifi', 'sensors_off', 'settings_cell', 'work_off', 'app_blocking', 'picture_in_picture_alt', 'join_full', 'line_style', 'perm_device_information', 'javascript', 'app_shortcut', 'subtitles_off', 'abc', 'update_disabled', 'swipe_left', 'lightbulb_circle', 'voice_over_off', 'private_connectivity', 'join_inner', 'settings_input_svideo', 'swipe_right', 'install_desktop', 'flip_to_back', 'swipe_up', 'view_array', 'open_in_new_off', 'arrow_outward', 'all_out', 'density_small', 'shop_2', 'label_off', 'data_thresholding', 'tab_unselected', 'rounded_corner', 'commit', 'text_rotate_vertical', 'explore_off', 'view_kanban', 'lock_person', 'install_mobile', 'text_rotation_none', 'css', 'swipe_down', 'not_accessible', 'spatial_audio_off', 'join_left', 'pin_invoke', 'pinch', 'extension_off', 'perm_camera_mic', 'swipe_vertical', 'noise_aware', 'view_cozy', 'pin_end', 'join_right', 'swipe_right_alt', 'text_rotate_up', 'text_rotation_angledown', 'browse_gallery', 'php', 'text_rotation_angleup', 'text_rotation_down', 'view_comfy_alt', 'view_compact_alt', 'add_home', 'network_ping', 'swipe_down_alt', 'unfold_more_double', 'on_device_training', 'density_large', 'swipe_left_alt', 'spatial_tracking', 'swipe_up_alt', 'spatial_audio', 'unfold_less_double', 'width_full', 'repartition', 'width_normal', 'transcribe', 'width_wide', 'hls', 'hls_off', 'face_unlock'
      ],
      navigationIcons: [
        'close', 'menu', 'expand_more', 'arrow_back', 'chevron_right', 'arrow_forward_ios', 'arrow_back_ios', 'cancel', 'arrow_drop_down', 'more_vert', 'arrow_forward', 'chevron_left', 'expand_less', 'check', 'more_horiz', 'refresh', 'apps', 'payments', 'arrow_upward', 'east', 'campaign', 'arrow_back_ios_new', 'arrow_downward', 'arrow_right', 'menu_open', 'fullscreen', 'arrow_drop_up', 'unfold_more', 'double_arrow', 'maps_home_work', 'west', 'expand_circle_down', 'arrow_left', 'south', 'north_east', 'north', 'home_work', 'first_page', 'fullscreen_exit', 'arrow_drop_down_circle', 'last_page', 'unfold_less', 'subdirectory_arrow_right', 'legend_toggle', 'south_east', 'app_settings_alt', 'assistant_direction', 'subdirectory_arrow_left', 'north_west', 'waterfall_chart', 'switch_left', 'south_west', 'pivot_table_chart', 'switch_right', 'apps_outage', 'offline_share', 'add_home_work'
      ],
      socialIcons: [
        'person', 'notifications', 'groups', 'people', 'share', 'school', 'person_outline', 'person_add', 'public', 'emoji_events', 'group', 'engineering', 'notifications_active', 'construction', 'people_alt', 'group_add', 'psychology', 'thumb_up_alt', 'health_and_safety', 'travel_explore', 'water_drop', 'notifications_none', 'emoji_emotions', 'sports_esports', 'sentiment_very_satisfied', 'location_city', 'workspace_premium', 'ios_share', 'precision_manufacturing', 'sentiment_satisfied', 'person_add_alt', 'military_tech', 'science', 'emoji_objects', 'history_edu', 'cake', 'sentiment_dissatisfied', 'handshake', 'sentiment_very_dissatisfied', 'emoji_people', 'coronavirus', 'self_improvement', 'person_remove', 'poll', 'whatshot', 'sports_soccer', 'domain', 'recommend', 'mood', 'people_outline', 'female', 'recycling', 'person_off', 'male', 'person_add_alt_1', 'connect_without_contact', 'sentiment_neutral', 'waving_hand', 'thumb_down_alt', 'back_hand', 'hiking', 'architecture', 'notifications_off', 'masks', 'real_estate_agent', 'luggage', 'front_hand', 'vaccines', 'mood_bad', 'emoji_nature', 'switch_account', 'compost', 'nights_stay', 'interests', 'king_bed', 'catching_pokemon', 'diversity_3', 'sports_basketball', 'notification_add', 'cruelty_free', 'sports_kabaddi', 'sports', 'man', 'emoji_symbols', 'reduce_capacity', 'emoji_food_beverage', 'sick', 'emoji_transportation', 'cookie', 'heart_broken', 'sports_tennis', 'elderly', 'transgender', 'add_moderator', 'add_reaction', 'woman', 'outdoor_grill', 'personal_injury', 'wallet', 'deck', 'diversity_1', 'follow_the_signs', 'social_distance', 'scale', 'plus_one', 'fireplace', 'clean_hands', 'pix', 'piano', 'surfing', 'sports_motorsports', 'sanitizer', 'sports_handball', 'sports_baseball', 'hive', 'edit_notifications', 'groups_2', 'sports_volleyball', 'psychology_alt', 'pages', 'sports_football', 'downhill_skiing', 'kayaking', 'diversity_2', 'public_off', 'group_remove', 'co2', 'single_bed', 'remove_moderator', 'skateboarding', 'notifications_paused', 'boy', 'person_remove_alt_1', 'safety_divider', 'domain_add', 'fitbit', 'group_off', 'sports_cricket', 'sports_mma', 'sports_martial_arts', 'thunderstorm', 'nordic_walking', 'sports_golf', 'girl', 'groups_3', 'paragliding', 'sports_gymnastics', 'party_mode', 'snowboarding', 'face_6', '6_ft_apart', 'kitesurfing', 'face_3', 'snowshoeing', 'sports_hockey', 'south_america', 'ice_skating', 'sports_rugby', 'elderly_woman', 'sledding', 'person_2', 'scoreboard', 'face_2', 'face_4', 'sign_language', 'cyclone', 'no_luggage', 'face_5', 'person_4', 'person_3', 'flood', 'piano_off', 'scuba_diving', 'severe_cold', 'tsunami', 'roller_skating', 'tornado', 'landslide', 'assist_walker', 'woman_2', 'man_2', 'blind', 'volcano', '18_up_rating', 'no_adult_content', 'man_4', 'man_3'
      ],
      contentIcons: [
        'add', 'add_circle_outline', 'content_copy', 'add_circle', 'send', 'clear', 'save', 'mail', 'link', 'remove', 'filter_list', 'inventory_2', 'inventory', 'insights', 'remove_circle_outline', 'sort', 'bolt', 'flag', 'reply', 'add_box', 'remove_circle', 'push_pin', 'block', 'calculate', 'create', 'undo', 'how_to_reg', 'content_paste', 'report', 'file_copy', 'backspace', 'shield', 'archive', 'save_alt', 'policy', 'change_circle', 'tag', 'redo', 'forward', 'content_cut', 'outlined_flag', 'inbox', 'link_off', 'ballot', 'drafts', 'biotech', 'report_gmailerrorred', 'delete_sweep', 'stacked_bar_chart', 'markunread', 'square_foot', 'add_link', 'stream', 'copy_all', 'dynamic_feed', 'where_to_vote', 'move_to_inbox', 'waves', 'content_paste_search', 'unarchive', 'reply_all', 'select_all', 'low_priority', 'text_format', 'save_as', 'font_download', 'weekend', 'how_to_vote', 'upcoming', 'gesture', 'attribution', 'flag_circle', 'content_paste_go', 'filter_list_off', 'next_week', 'content_paste_off', 'web_stories', 'report_off', 'deselect', 'font_download_off'
      ],
      imageIcons: [
        'edit', 'navigate_next', 'photo_camera', 'image', 'tune', 'picture_as_pdf', 'receipt_long', 'circle', 'timer', 'auto_stories', 'auto_awesome', 'collections', 'navigate_before', 'add_a_photo', 'palette', 'remove_red_eye', 'music_note', 'add_photo_alternate', 'wb_sunny', 'brush', 'euro', 'flash_on', 'auto_fix_high', 'looks_one', 'control_point', 'style', 'adjust', 'straighten', 'photo_library', 'camera', 'portrait', 'camera_alt', 'audiotrack', 'rotate_right', 'color_lens', 'video_camera_front', 'grid_on', 'crop_free', 'timelapse', 'currency_rupee', 'slideshow', 'landscape', 'collections_bookmark', 'crop_square', 'panorama_fish_eye', 'lens', 'looks_two', 'looks_3', 'filter_vintage', 'compare', 'filter_drama', 'image_search', 'healing', 'rotate_left', 'auto_awesome_motion', 'center_focus_strong', 'crop', 'blur_on', 'wb_incandescent', 'face_retouching_natural', 'assistant', 'flare', 'broken_image', 'wb_cloudy', 'cases', 'filter_none', 'colorize', 'filter_center_focus', 'crop_original', 'auto_fix_normal', 'brightness_4', 'nature_people', 'dehaze', 'photo', 'flash_off', 'auto_awesome_mosaic', 'tag_faces', 'brightness_6', 'brightness_5', 'details', 'grain', 'brightness_1', 'flip_camera_android', 'flip', 'loupe', 'image_not_supported', 'view_comfy', 'flip_camera_ios', 'filter_1', 'movie_creation', 'bedtime', 'add_to_photos', 'panorama', 'looks_4', 'animation', 'center_focus_weak', 'movie_filter', 'crop_din', 'currency_bitcoin', 'control_point_duplicate', 'filter', 'brightness_7', 'leak_add', 'incomplete_circle', 'nature', 'view_compact', 'texture', 'currency_yen', 'timer_off', 'photo_size_select_actual', 'video_camera_back', 'transform', 'motion_photos_on', 'looks_5', 'rotate_90_degrees_ccw', 'photo_camera_front', 'contrast', 'mic_external_on', 'gradient', 'wb_twilight', 'currency_pound', 'assistant_photo', 'hide_image', 'exposure_plus_1', 'music_off', 'crop_16_9', 'thermostat_auto', 'exposure', 'filter_2', 'shutter_speed', 'photo_album', 'filter_tilt_shift', 'hdr_strong', 'looks', 'linked_camera', 'brightness_3', 'vrpano', 'looks_6', 'blur_circular', 'flash_auto', 'crop_portrait', 'motion_photos_auto', 'photo_filter', 'iso', 'brightness_2', 'photo_size_select_small', 'filter_hdr', 'tonality', 'crop_7_5', 'rotate_90_degrees_cw', 'crop_rotate', 'photo_size_select_large', 'exposure_zero', 'currency_ruble', 'filter_3', 'hdr_weak', 'camera_front', 'crop_5_4', 'filter_frames', 'burst_mode', 'camera_roll', 'logo_dev', 'filter_b_and_w', 'blur_linear', 'crop_landscape', 'crop_3_2', 'switch_camera', 'switch_video', 'filter_7', 'filter_4', 'exposure_plus_2', 'filter_9_plus', 'wb_iridescent', 'grid_off', 'motion_photos_paused', 'photo_camera_back', 'monochrome_photos', 'filter_5', 'auto_fix_off', 'exposure_neg_1', 'face_retouching_off', 'panorama_photosphere', 'leak_remove', 'filter_8', 'filter_9', 'timer_10', 'video_stable', 'filter_6', 'motion_photos_off', 'wb_shade', 'raw_on', 'blur_off', 'motion_photos_pause', 'hdr_on', 'vignette', 'deblur', 'panorama_horizontal', 'image_aspect_ratio', 'dirty_lens', '30fps_select', 'camera_rear', 'timer_3', '60fps_select', 'currency_lira', 'currency_yuan', 'panorama_wide_angle_select', '24mp', 'exposure_neg_2', 'autofps_select', 'panorama_horizontal_select', 'panorama_photosphere_select', 'wb_auto', 'hdr_plus', 'panorama_wide_angle', 'panorama_vertical_select', 'mic_external_off', '12mp', 'panorama_vertical', 'currency_franc', 'mp', 'hdr_enhanced_select', 'hevc', '18mp', '10mp', 'bedtime_off', 'raw_off', '23mp', 'hdr_off', '11mp', '20mp', '3mp', '5mp', '13mp', '16mp', '15mp', '21mp', '2mp', '17mp', '14mp', '22mp', '19mp', '4mp', '8mp', '9mp', '7mp', '6mp'
      ],
      communicationIcons: [
        'email', 'location_on', 'call', 'phone', 'business', 'chat', 'mail_outline', 'list_alt', 'qr_code_scanner', 'vpn_key', 'chat_bubble_outline', 'alternate_email', 'forum', 'chat_bubble', 'textsms', 'contact_mail', 'person_search', 'sentiment_satisfied_alt', 'qr_code', 'qr_code_2', 'message', 'contacts', 'comment', 'key', 'import_contacts', 'app_registration', 'contact_phone', 'import_export', 'live_help', 'forward_to_inbox', 'hourglass_bottom', 'hourglass_top', 'rss_feed', 'mark_email_read', 'hub', 'read_more', 'document_scanner', 'more_time', 'mark_email_unread', 'call_end', 'clear_all', 'dialpad', 'phone_enabled', 'mark_chat_unread', 'cancel_presentation', '3p', 'call_made', 'screen_share', 'call_split', 'unsubscribe', 'domain_verification', 'present_to_all', 'mark_chat_read', 'co_present', 'add_ic_call', 'phonelink_ring', 'stay_current_portrait', 'call_received', 'phonelink_lock', 'phone_disabled', 'ring_volume', 'cell_tower', 'location_off', 'phonelink_setup', 'duo', 'stay_primary_portrait', 'swap_calls', 'voicemail', 'call_merge', 'phonelink_erase', 'mobile_screen_share', 'person_add_disabled', 'domain_disabled', 'call_missed_outgoing', 'spoke', 'speaker_phone', 'desktop_access_disabled', 'cell_wifi', 'stop_screen_share', 'print_disabled', 'mark_unread_chat_alt', 'call_missed', 'contact_emergency', 'pause_presentation', 'dialer_sip', 'comments_disabled', 'invert_colors_off', 'wifi_calling', 'rtt', 'portable_wifi_off', 'send_time_extension', 'mail_lock', 'stay_current_landscape', 'sip', 'nat', 'stay_primary_landscape', 'key_off', 'no_sim', 'vpn_key_off'
      ],
      mapIcons: [
        'local_shipping', 'place', 'menu_book', 'local_offer', 'badge', 'map', 'category', 'restaurant', 'directions_car', 'local_fire_department', 'volunteer_activism', 'my_location', 'flight', 'local_mall', 'near_me', 'handyman', 'directions_run', 'restaurant_menu', 'layers', 'medical_services', 'directions_walk', 'lunch_dining', 'local_hospital', 'celebration', 'local_library', 'pin_drop', 'park', 'local_atm', 'local_activity', 'person_pin', 'design_services', 'local_cafe', 'rate_review', 'delivery_dining', 'directions_bus', 'local_police', 'directions_bike', 'fastfood', 'directions_car_filled', 'home_repair_service', 'zoom_out_map', 'cleaning_services', 'hotel', 'local_phone', 'miscellaneous_services', 'local_grocery_store', 'navigation', 'local_gas_station', 'train', 'diamond', 'person_pin_circle', 'local_parking', 'local_florist', 'local_post_office', 'money', 'directions', 'factory', 'two_wheeler', 'add_business', 'electrical_services', 'traffic', 'route', 'directions_boat', 'local_bar', 'alt_route', 'warehouse', 'beenhere', 'agriculture', 'pedal_bike', 'emergency', '360', 'liquor', 'moving', 'local_airport', 'sailing', 'add_location_alt', 'local_dining', 'maps_ugc', 'local_taxi', 'ramen_dining', 'trip_origin', 'local_laundry_service', 'hail', 'local_drink', 'directions_bus_filled', 'local_printshop', 'theater_comedy', 'local_pizza', 'forest', 'not_listed_location', 'transfer_within_a_station', 'add_location', 'dinner_dining', 'bakery_dining', 'wine_bar', 'terrain', 'multiple_stop', 'takeout_dining', 'store_mall_directory', 'icecream', 'museum', 'nightlife', 'local_pharmacy', 'hardware', 'departure_board', 'add_road', 'set_meal', 'ev_station', 'electric_car', 'local_see', 'festival', 'plumbing', 'car_rental', 'layers_clear', 'attractions', 'medical_information', 'edit_location', 'zoom_in_map', 'local_convenience_store', 'pest_control', 'run_circle', 'dry_cleaning', 'edit_road', 'church', 'edit_attributes', 'edit_location_alt', 'wrong_location', 'moped', 'car_repair', 'local_movies', 'satellite', 'directions_boat_filled', 'soup_kitchen', 'signpost', 'tram', 'taxi_alert', 'breakfast_dining', 'merge', 'atm', 'straight', 'subway', 'transit_enterexit', 'crisis_alert', 'brunch_dining', 'hvac', 'electric_bike', 'directions_transit', 'connecting_airports', 'electric_scooter', 'egg', 'bus_alert', 'mode_of_travel', 'local_car_wash', 'local_hotel', 'safety_check', 'stadium', 'castle', 'streetview', 'car_crash', 'mosque', 'directions_subway', 'compass_calibration', 'electric_rickshaw', 'turn_right', 'airline_stops', 'directions_railway', 'fork_right', 'no_meals', 'railway_alert', 'electric_moped', 'local_play', 'no_crash', 'turn_left', 'airlines', 'bike_scooter', 'u_turn_left', 'pest_control_rodent', 'egg_alt', 'near_me_disabled', 'snowmobile', 'directions_transit_filled', 'tire_repair', 'no_transfer', 'minor_crash', 'directions_subway_filled', 'flight_class', 'kebab_dining', 'sos', 'directions_railway_filled', 'fort', 'temple_buddhist', 'emergency_share', 'u_turn_right', 'fire_truck', 'temple_hindu', 'synagogue', 'fork_left', 'remove_road', 'turn_sharp_right', 'screen_rotation_alt', 'roundabout_right', 'turn_slight_right', 'turn_slight_left', 'emergency_recording', 'roundabout_left', 'turn_sharp_left', 'ramp_left', 'ramp_right', 'fire_hydrant_alt'
      ],
      fileIcons: [
        'file_download', 'file_upload', 'download', 'folder', 'grid_view', 'upload_file', 'cloud_upload', 'folder_open', 'text_snippet', 'cloud', 'request_quote', 'cloud_download', 'drive_file_rename_outline', 'upload', 'attachment', 'download_for_offline', 'newspaper', 'create_new_folder', 'downloading', 'folder_shared', 'cloud_done', 'cloud_queue', 'workspaces', 'topic', 'approval', 'download_done', 'cloud_off', 'drive_file_move', 'file_open', 'drive_folder_upload', 'file_download_done', 'cloud_sync', 'attach_email', 'rule_folder', 'folder_zip', 'folder_copy', 'cloud_circle', 'snippet_folder', 'difference', 'file_download_off', 'folder_delete', 'drive_file_move_rtl', 'folder_off', 'format_overline'
      ],
      mediaIcons: [
        'play_arrow', 'play_circle_filled', 'videocam', 'play_circle', 'mic', 'volume_up', 'pause', 'play_circle_outline', 'replay', 'volume_off', 'library_books', 'skip_next', 'fiber_manual_record', 'speed', 'stop', 'movie', 'skip_previous', 'new_releases', 'playlist_add', 'loop', 'equalizer', 'fast_forward', 'web', 'video_library', 'playlist_add_check', 'library_add', 'mic_off', 'pause_circle', 'stop_circle', 'subscriptions', 'volume_mute', 'video_call', 'repeat', 'not_interested', 'shuffle', 'sort_by_alpha', 'fast_rewind', 'mic_none', 'library_music', 'volume_down', 'videocam_off', 'recent_actors', 'web_asset', 'library_add_check', 'hearing', 'queue_music', 'pause_circle_filled', 'subtitles', 'pause_circle_outline', 'fiber_new', 'note', 'av_timer', 'album', 'playlist_play', 'queue', 'games', 'radio', 'replay_circle_filled', 'branding_watermark', 'forward_10', 'replay_10', 'closed_caption', 'video_settings', 'high_quality', 'featured_play_list', 'playlist_add_check_circle', 'control_camera', 'playlist_remove', 'add_to_queue', 'slow_motion_video', 'repeat_one', 'airplay', 'call_to_action', 'snooze', 'hd', 'replay_30', 'repeat_on', 'closed_caption_off', 'featured_video', 'shuffle_on', 'forward_30', 'audio_file', '5g', 'playlist_add_circle', 'music_video', 'queue_play_next', 'replay_5', 'interpreter_mode', 'video_file', 'art_track', 'hearing_disabled', 'forward_5', 'explicit', '4k', 'video_label', 'fiber_smart_record', 'repeat_one_on', 'closed_caption_disabled', 'remove_from_queue', 'surround_sound', 'play_disabled', 'web_asset_off', 'sd', 'lyrics', 'missed_video_call', '10k', 'fiber_pin', 'fiber_dvr', '4k_plus', '1k', '2k', '1k_plus', '8k', '5k', '8k_plus', '9k_plus', '3k', '5k_plus', '9k', '7k', '2k_plus', '6k_plus', '3k_plus', '6k', '7k_plus'
      ],
      toggleIcons: [
        'star', 'check_box', 'check_box_outline_blank', 'radio_button_unchecked', 'radio_button_checked', 'star_border', 'toggle_on', 'star_outline', 'toggle_off', 'star_half', 'indeterminate_check_box', 'star_purple500', 'star_border_purple500'
      ],
      alertIcons: [
        'warning', 'error', 'error_outline', 'warning_amber', 'notification_important', 'add_alert', 'auto_delete'
      ],
      notificationIcons: [
        'support_agent', 'wifi', 'account_tree', 'sync', 'priority_high', 'event_available', 'event_note', 'confirmation_number', 'sms', 'live_tv', 'ondemand_video', 'drive_eta', 'wifi_off', 'event_busy', 'do_not_disturb_on', 'wc', 'more', 'power', 'do_not_disturb', 'sync_problem', 'time_to_leave', 'do_disturb_on', 'vpn_lock', 'running_with_errors', 'folder_special', 'enhanced_encryption', 'do_disturb', 'sms_failed', 'network_check', 'phone_callback', 'adb', 'phone_forwarded', 'system_update', 'power_off', 'personal_video', 'voice_chat', 'vibration', 'airline_seat_recline_normal', 'do_disturb_alt', 'do_not_disturb_alt', 'sync_disabled', 'tap_and_play', 'no_encryption', 'sd_card', 'phone_missed', 'airline_seat_recline_extra', 'imagesearch_roller', 'mms', 'disc_full', 'no_encryption_gmailerrorred', 'sync_lock', 'bluetooth_audio', 'sd_card_alert', 'sim_card_alert', 'do_not_disturb_off', 'phone_paused', 'airline_seat_individual_suite', 'do_disturb_off', 'phone_locked', 'network_locked', 'airline_seat_flat', 'tv_off', 'phone_bluetooth_speaker', 'airline_seat_flat_angled', 'airline_seat_legroom_normal', 'directions_off', 'airline_seat_legroom_extra', 'airline_seat_legroom_reduced', 'video_chat'
      ],
      editorIcons: [
        'attach_money', 'edit_note', 'format_list_bulleted', 'mode_edit', 'monetization_on', 'attach_file', 'post_add', 'bar_chart', 'checklist', 'drag_handle', 'show_chart', 'insert_drive_file', 'format_quote', 'query_stats', 'format_list_numbered', 'table_chart', 'border_color', 'pie_chart', 'notes', 'format_bold', 'checklist_rtl', 'text_fields', 'table_rows', 'publish', 'title', 'insert_emoticon', 'auto_graph', 'insert_photo', 'insert_chart_outlined', 'draw', 'mode', 'mode_comment', 'functions', 'insert_link', 'mode_edit_outline', 'insert_invitation', 'horizontal_rule', 'format_align_left', 'format_italic', 'format_color_fill', 'add_comment', 'insert_chart', 'linear_scale', 'stacked_line_chart', 'format_size', 'insert_comment', 'format_underlined', 'money_off', 'bubble_chart', 'vertical_align_bottom', 'height', 'vertical_align_top', 'schema', 'format_align_center', 'square', 'area_chart', 'format_paint', 'format_color_text', 'format_align_right', 'scatter_plot', 'format_list_numbered_rtl', 'highlight', 'format_align_justify', 'data_object', 'merge_type', 'add_chart', 'numbers', 'format_shapes', 'money_off_csred', 'pie_chart_outline', 'format_indent_increase', 'short_text', 'move_up', 'strikethrough_s', 'format_color_reset', 'vertical_align_center', 'align_horizontal_left', 'hexagon', 'rectangle', 'move_down', 'multiline_chart', 'score', 'border_all', 'text_increase', 'format_indent_decrease', 'polyline', 'format_clear', 'space_bar', 'format_line_spacing', 'horizontal_distribute', 'align_vertical_bottom', 'candlestick_chart', 'align_horizontal_center', 'vertical_distribute', 'align_horizontal_right', 'format_strikethrough', 'superscript', 'data_array', 'margin', 'pentagon', 'wrap_text', 'align_vertical_top', 'border_clear', 'subscript', 'align_vertical_center', 'text_decrease', 'border_style', 'padding', 'border_outer', 'line_axis', 'insert_page_break', 'border_inner', 'border_left', 'border_bottom', 'format_textdirection_l_to_r', 'shape_line', 'border_vertical', 'border_horizontal', 'format_textdirection_r_to_l', 'border_top', 'border_right', 'type_specimen'
      ],
      hardwareIcons: [
        'keyboard_arrow_down', 'phone_iphone', 'smartphone', 'keyboard_arrow_right', 'computer', 'security', 'desktop_windows', 'smart_display', 'keyboard_backspace', 'phone_android', 'keyboard_arrow_up', 'keyboard_double_arrow_right', 'keyboard_return', 'laptop', 'smart_toy', 'keyboard_arrow_left', 'memory', 'headphones', 'keyboard', 'point_of_sale', 'headset_mic', 'tv', 'keyboard_double_arrow_left', 'keyboard_double_arrow_down', 'mouse', 'keyboard_voice', 'developer_board', 'router', 'start', 'videogame_asset', 'keyboard_double_arrow_up', 'cast_for_education', 'device_hub', 'headset', 'laptop_mac', 'cast', 'watch', 'tablet_mac', 'devices_other', 'desktop_mac', 'keyboard_tab', 'laptop_chromebook', 'phonelink', 'monitor', 'speaker', 'toys', 'gamepad', 'sim_card', 'keyboard_alt', 'connected_tv', 'tablet_android', 'cast_connected', 'laptop_windows', 'device_unknown', 'browser_updated', 'keyboard_hide', 'scanner', 'tablet', 'speaker_group', 'earbuds', 'keyboard_capslock', 'headset_off', 'keyboard_command_key', 'home_max', 'headphones_battery', 'dock', 'power_input', 'smart_screen', 'browser_not_supported', 'earbuds_battery', 'phonelink_off', 'home_mini', 'adf_scanner', 'developer_board_off', 'videogame_asset_off', 'keyboard_control_key', 'watch_off', 'keyboard_option_key'
      ],
      deviceIcons: [
        'light_mode', 'restart_alt', 'dark_mode', 'task', 'summarize', 'password', 'sell', 'signal_cellular_alt', 'devices', 'settings_suggest', 'quiz', 'widgets', 'storage', 'credit_score', 'thermostat', 'battery_full', 'gps_fixed', 'price_check', 'medication', 'pin', 'gpp_good', 'price_change', 'battery_charging_full', 'tungsten', 'fmd_good', 'reviews', 'air', 'note_alt', 'bluetooth', 'graphic_eq', 'dvr', 'monitor_heart', 'nightlight', 'sports_score', 'access_time', 'water', 'share_location', 'gpp_maybe', 'cable', 'location_searching', 'cameraswitch', 'shortcut', 'airplane_ticket', 'wallpaper', 'device_thermostat', 'radar', 'gpp_bad', 'data_usage', 'discount', 'monitor_weight', 'signal_wifi_4_bar', 'developer_mode', 'mode_night', 'wifi_tethering', 'bloodtype', 'battery_std', 'signal_cellular_4_bar', 'lan', 'fmd_bad', 'flashlight_on', 'splitscreen', 'network_wifi', 'sim_card_download', 'access_time_filled', 'airplanemode_active', 'mobile_friendly', 'usb', 'send_to_mobile', 'battery_alert', 'lens_blur', 'screen_search_desktop', 'signal_wifi_statusbar_4_bar', 'screen_rotation', 'signal_wifi_statusbar_connected_no_internet_4', 'gps_not_fixed', 'system_security_update_good', 'bluetooth_connected', 'remember_me', 'nfc', 'battery_5_bar', 'mode_standby', 'pattern', 'brightness_high', 'battery_saver', 'play_lesson', 'storm', 'data_saver_off', 'brightness_medium', 'data_saver_on', 'brightness_low', 'bluetooth_searching', 'grid_4x4', 'signal_wifi_0_bar', 'mobiledata_off', 'screenshot', 'network_cell', 'ad_units', 'ssid_chart', 'bluetooth_disabled', 'battery_4_bar', 'hdr_auto', 'security_update_good', 'wifi_calling_3', 'battery_0_bar', 'battery_unknown', 'signal_wifi_off', 'settings_system_daydream', 'battery_6_bar', 'signal_wifi_bad', 'access_alarms', 'battery_3_bar', 'signal_wifi_connected_no_internet_4', 'access_alarm', 'aod', 'flashlight_off', 'add_to_home_screen', 'signal_cellular_0_bar', 'security_update', 'gps_off', 'medication_liquid', 'signal_wifi_statusbar_null', 'battery_1_bar', 'sd_storage', 'punch_clock', '4g_mobiledata', 'grid_3x3', 'reset_tv', 'brightness_auto', 'signal_cellular_connected_no_internet_4_bar', 'wifi_lock', 'do_not_disturb_on_total_silence', 'battery_2_bar', 'airplanemode_inactive', 'nearby_error', '1x_mobiledata', 'dataset', 'security_update_warning', 'screenshot_monitor', 'signal_cellular_connected_no_internet_0_bar', 'phishing', 'screen_lock_portrait', 'wifi_password', 'system_security_update_warning', 'system_security_update', 'wifi_tethering_off', 'edgesensor_high', 'signal_cellular_nodata', '4g_plus_mobiledata', '30fps', 'signal_cellular_off', 'signal_wifi_4_bar_lock', 'lte_mobiledata', 'add_alarm', 'location_disabled', 'network_wifi_1_bar', 'bluetooth_drive', 'mobile_off', 'signal_cellular_null', 'wifi_find', 'media_bluetooth_on', 'network_wifi_3_bar', 'rsvp', 'edgesensor_low', '3g_mobiledata', 'grid_goldenratio', 'usb_off', 'screen_lock_rotation', '60fps', 'screen_lock_landscape', 'lte_plus_mobiledata', 'network_wifi_2_bar', 'timer_10_select', 'wifi_2_bar', 'signal_cellular_no_sim', 'signal_cellular_alt_1_bar', 'wifi_tethering_error', 'signal_cellular_alt_2_bar', 'dataset_linked', 'g_mobiledata', 'wifi_1_bar', 'wifi_channel', 'timer_3_select', 'h_mobiledata', 'media_bluetooth_off', 'e_mobiledata', 'r_mobiledata', 'h_plus_mobiledata', 'hdr_on_select', 'hdr_auto_select', 'nearby_off', 'hdr_off_select', 'devices_fold', 'fluorescent', 'macro_off'
      ],
      placeIcons: [
        'storefront', 'apartment', 'fitness_center', 'business_center', 'spa', 'meeting_room', 'house', 'corporate_fare', 'ac_unit', 'cottage', 'family_restroom', 'checkroom', 'other_houses', 'all_inclusive', 'grass', 'airport_shuttle', 'child_care', 'beach_access', 'pool', 'kitchen', 'casino', 'holiday_village', 'room_service', 'roofing', 'room_preferences', 'sports_bar', 'free_breakfast', 'bathtub', 'escalator_warning', 'child_friendly', 'foundation', 'food_bank', 'gite', 'villa', 'night_shelter', 'golf_course', 'no_photography', 'stairs', 'microwave', 'backpack', 'elevator', 'wash', 'smoking_rooms', 'cabin', 'house_siding', 'hot_tub', 'countertops', 'water_damage', 'fire_extinguisher', 'charging_station', 'carpenter', 'rv_hookup', 'baby_changing_station', 'soap', 'smoke_free', 'umbrella', 'do_not_touch', 'tapas', 'rice_bowl', 'tty', 'balcony', 'fence', 'no_food', 'houseboat', 'bento', 'wheelchair_pickup', 'iron', 'bungalow', 'crib', 'chalet', 'do_not_step', 'no_meeting_room', 'escalator', 'dry', 'stroller', 'no_drinks', 'no_cell', 'no_flash', 'no_backpack', 'no_stroller', 'vaping_rooms', 'desk', 'vape_free'
      ],
      searchIcons: [
        'manage_search', 'feed', 'chair', 'bed', 'podcasts', 'coffee', 'shower', 'yard', 'window', 'light', 'door_front', 'garage', 'dining', 'flatware', 'coffee_maker', 'blender', 'table_restaurant', 'bedroom_parent', 'camera_indoor', 'bedroom_baby', 'bathroom', 'chair_alt', 'door_sliding', 'camera_outdoor', 'door_back', 'living', 'doorbell', 'bedroom_child', 'table_bar'
      ],
      homeIcons: [
        'sensor_door', 'electric_bolt', 'sensor_window', 'energy_savings_leaf', 'solar_power', 'auto_mode', 'shield_moon', 'wind_power', 'oil_barrel', 'sensor_occupied', 'electric_meter', 'heat_pump', 'gas_meter', 'propane_tank', 'mode_fan_off', 'roller_shades', 'broadcast_on_personal', 'propane', 'blinds', 'roller_shades_closed', 'blinds_closed', 'curtains', 'vertical_shades', 'vertical_shades_closed', 'curtains_closed', 'nest_cam_wired_stand', 'broadcast_on_home'
      ],
      copy (text) {
        copyToClipboard(text).then(() => {
          $q.notify({
            color: 'info',
            message: '复制成功：' + text
          })
        }).catch(() => {
          $q.notify({
            color: 'warning',
            message: '复制失败：' + text
          })
        })
      }
    }
  }
})
</script>

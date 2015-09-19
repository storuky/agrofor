Rails.application.routes.draw do

  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
  }

  root to: "application#index"
  
  scope :api do
    get 'search' => 'search#index'
    get 'analytics' => 'analytics#index'
    get 'support' => 'support#index'
    get 'help' => 'help#index'
    get 'settings' => 'settings#index'

    resources :positions
    resources :favorites
    resources :templates
    resources :messages
    resources :correspondences
    resources :offers
    resources :profile

    post 'images' => 'images#upload'
    delete 'images' => 'images#destroy'

    post 'documents' => 'documents#upload'
    delete 'documents' => 'documents#destroy'
  end

  get '/*path' => 'application#index'
end

import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { 
  Settings as SettingsIcon, 
  Key,
  Bell,
  Shield,
  Save,
  Loader2,
  LogOut
} from 'lucide-react';

const Settings = () => {
  const { user, signOut } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    autoApply: false,
    darkMode: true,
  });

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Save settings logic here
      await new Promise(resolve => setTimeout(resolve, 500));
      toast.success('Settings saved');
    } catch (error) {
      toast.error('Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground mt-1">
              Manage your application preferences
            </p>
          </div>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Save Settings
          </Button>
        </div>

        {/* Account */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Account
            </CardTitle>
            <CardDescription>
              Your account information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={user?.email || ''} disabled />
            </div>
            <Button variant="destructive" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>
              Configure how you receive updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about new job matches
                </p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => 
                  setSettings({ ...settings, emailNotifications: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Automation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              Automation
            </CardTitle>
            <CardDescription>
              Configure auto-apply behavior
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-Apply</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically apply to high-match jobs
                </p>
              </div>
              <Switch
                checked={settings.autoApply}
                onCheckedChange={(checked) => 
                  setSettings({ ...settings, autoApply: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              API Configuration
            </CardTitle>
            <CardDescription>
              Manage your AI provider keys
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="openai_key">OpenAI API Key</Label>
              <Input
                id="openai_key"
                type="password"
                placeholder="sk-..."
              />
              <p className="text-xs text-muted-foreground">
                Used for AI-powered resume tailoring
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Settings;

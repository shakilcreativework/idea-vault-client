import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";

export function CustomTrigger() {
    const { data: session, error } = authClient.useSession();
    console.log(session);
    return (
        <Dropdown>
            <Dropdown.Trigger className="rounded-full">
                <Avatar>
                    <Avatar.Image
                        alt={session?.user?.name || "User Name"}
                        src={session?.user?.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                    />
                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <Avatar.Image
                                alt={session?.user?.name || "User Name"}
                                src={session?.user?.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                            />
                            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{session?.user?.name}</p>
                            <p className="text-xs leading-none text-muted">{session?.user?.email}</p>
                        </div>
                    </div>
                </div>
                <Dropdown.Menu>
                    <Dropdown.Item id="profile" textValue="Profile">
                        <Label>Profile</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Log Out</Label>
                            <ArrowRightFromSquare className="size-3.5 text-danger" />
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}